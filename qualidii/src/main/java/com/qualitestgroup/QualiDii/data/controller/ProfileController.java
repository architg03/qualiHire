package com.qualitestgroup.QualiDii.data.controller;

import com.qualitestgroup.QualiDii.data.beans.Product;
import com.qualitestgroup.QualiDii.data.beans.Profile;
import com.qualitestgroup.QualiDii.data.beans.User;
import com.qualitestgroup.QualiDii.data.repository.ProductRepository;
import com.qualitestgroup.QualiDii.data.repository.ProfileRepository;
import com.tri.persistence.jpql.QueryBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.net.http.HttpHeaders;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/profile")
public class ProfileController {
    @Autowired
    EntityManager em;
    @Autowired
    ProfileRepository repository;
    @Autowired
    private ProductRepository PRepository;
    @GetMapping("/search")
    @CrossOrigin
    public List<Profile> findByJSON(@RequestBody Profile Profile){
        boolean titleNotNull = Profile.getTitle() != null;
        boolean descNotNull = Profile.getDescription() != null;
        QueryBuilder builder = new QueryBuilder().select.add("p").from.add("Profile p");
        //If the name has anything in it, then we add the name to the search query
        if(titleNotNull && !Profile.getTitle().isEmpty()){
            builder.where.add("p.title = :title");
            builder.setParameter("title", Profile.getTitle());
        }
        //If the token has anything in it, then we add the token to the search query
        if(descNotNull && !Profile.getDescription().isEmpty()){
            builder.where.add("p.description = :description");
            builder.setParameter("description",Profile.getDescription());
        }

        return builder.createQuery(em,Profile.class).getResultList();
    }

    @PostMapping("/data/{id}")
    @Modifying
    @CrossOrigin
    @Transactional
    public void addData(@PathVariable long id, @RequestBody Product product){
        Profile profile = repository.getReferenceById(id);
        product = em.find(Product.class,product.getId());
        QueryBuilder builder = new QueryBuilder().select.add("t").from.add("Product t");
        builder.where.add("t.id = :id");
        builder.setParameter("id",product.getId());

        product = builder.createQuery(em,Product.class).getSingleResult();

        profile.addData(product);
        product.setProfile(profile);
        em.persist(profile);
        em.persist(product);
    }

    @PutMapping("/create")
    @CrossOrigin
    @Transactional
    public void createProfile(@RequestBody Profile profile){
        em.persist(profile.getExampleData());
        repository.saveAndFlush(profile);
    }

    @PostMapping("/remove/{id}")
    @Transactional
    @CrossOrigin
    @Modifying
    public void removeData(@PathVariable long id, @RequestBody Product product){
        QueryBuilder builder = new QueryBuilder().select.add("t").from.add("Profile t");
        builder.where.add("t.UUID = :uuid");
        builder.setParameter("uuid",id);
        Profile profile = builder.createQuery(em,Profile.class).getSingleResult();
        Product product1 = PRepository.getReferenceById(product.getId());
        profile.deleteData(product1);
        em.persist(profile);
    }

}
