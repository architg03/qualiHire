package com.qualitestgroup.QualiDii.data.controller;

import com.qualitestgroup.QualiDii.data.beans.Product;
import com.qualitestgroup.QualiDii.data.beans.Profile;
import com.qualitestgroup.QualiDii.data.beans.Request;
import com.qualitestgroup.QualiDii.data.beans.User;
import com.qualitestgroup.QualiDii.data.repository.ProductRepository;
import com.qualitestgroup.QualiDii.data.repository.RequestRepository;
import com.tri.persistence.jpql.QueryBuilder;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import java.net.http.HttpHeaders;
import java.util.List;

import static com.qualitestgroup.QualiDii.TdpApplication.dataDict;

@RestController
@CrossOrigin(origins = "http://localhost:8080/")
@RequestMapping(value = "/products")
public class ProductController {
    @Autowired
    private EntityManager em;
    @Autowired
    private ProductRepository repository;
    @Autowired
    private RequestRepository RRepo;

    @GetMapping("/search")
    @CrossOrigin
    public List<Product> findByJSON(@RequestBody Product product){
        boolean nameNotNull = product.getName() != null;
        boolean tokenNotNull = product.getType() != null;
        QueryBuilder builder = new QueryBuilder().select.add("p").from.add("Product p");
        //If the name has anything in it, then we add the name to the search query
        if(nameNotNull && !product.getName().isEmpty()){
            builder.where.add("p.name = :name");
            builder.setParameter("name", product.getName());
        }
        //If the token has anything in it, then we add the token to the search query
        if(tokenNotNull && !product.getType().isEmpty()){
            builder.where.add("p.type = :type");
            builder.setParameter("type",product.getType());
        }

        return builder.createQuery(em,Product.class).getResultList();
    }

    @Transactional
    @Modifying
    @CrossOrigin
    @PostMapping("/unlock")
    public void deleteUser(@RequestBody Product ProductID){
        QueryBuilder builder = new QueryBuilder().select.add("p").from.add("Product p");
        builder.where.add("p.id = :id");
        builder.setParameter("id",ProductID.getId());
        Product product = builder.createQuery(em,Product.class).getSingleResult();
        if(product.getUser() == null){
            Request req = new Request("Product with id" + product.getId() + " could not be unlocked because there was no" +
                    " user found for it.");
            em.persist(req);
            RRepo.saveAndFlush(req);
            throw new RuntimeException("No user found for this product.");
        }
        else{
            User user = em.find(User.class,product.getUserID());
            user.deleteProduct(product);
            product.deleteUser();
            em.persist(product);
            em.persist(user);
        }
    }
    @Transactional
    @Modifying
    @CrossOrigin
    @PostMapping("/unlockProfile")
    public void deleteProfile(@RequestBody Product ProductID){
        QueryBuilder builder = new QueryBuilder().select.add("p").from.add("Product p");
        builder.where.add("p.id = :id");
        builder.setParameter("id",ProductID.getId());
        Product product = builder.createQuery(em,Product.class).getSingleResult();
        if(product.getProfileID() == null){
            throw new RuntimeException("No Profile found for this product.");
        }
        else{
            Profile profile = em.find(Profile.class,product.getProfileID());
            product.deleteProfile();
            profile.deleteData(product);
            em.persist(product);
            em.persist(profile);
        }
    }

    @PutMapping("/addData")
    @CrossOrigin
    @Transactional
    public void addProduct(@RequestBody Product product){

        if(dataDict.get(product.getType().toLowerCase()) == null){
            dataDict.put(product.getType(),"Product");
        }
        repository.saveAndFlush(product);
    }

    public String capitalizeWord(String word){
        String result = String.valueOf(word.charAt(0)).toUpperCase();
        result+= word.substring(1).toLowerCase();
        return result;
    }

}
