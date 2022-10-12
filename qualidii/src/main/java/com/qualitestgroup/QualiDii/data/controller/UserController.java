package com.qualitestgroup.QualiDii.data.controller;

import com.qualitestgroup.QualiDii.data.beans.Product;
import com.qualitestgroup.QualiDii.data.beans.User;
import com.qualitestgroup.QualiDii.data.repository.ProductRepository;
import com.qualitestgroup.QualiDii.data.repository.UserRepository;
import com.tri.persistence.jpql.QueryBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private EntityManager em;
    @Autowired
    private UserRepository repository;
    @Autowired
    private ProductRepository PRepository;

    @GetMapping("")
    public List<User> findByFNameOrLName(@RequestBody User user){
        boolean FNameNotNull = user.getFName() != null;
        boolean LNameNotNull = user.getLName() != null;
        QueryBuilder builder = new QueryBuilder().select.add("u").from.add("User u");
        //If there is anything in the FName, then we add it to the search query.
        if(FNameNotNull && !user.getFName().isEmpty()) {
            builder.where.add("u.FName = :Fname");
            builder.setParameter("Fname", user.getFName());
        }
        //If there is anything in LName, then we add it to the search query.
        if(LNameNotNull && !user.getLName().isEmpty()){
            builder.where.add("u.LName = :Lname");
            builder.setParameter("Lname",user.getLName());
        }
        return builder.createQuery(em,User.class).getResultList();
    }

    @PostMapping("/data/{id}")
    @Modifying
    @Transactional
    public void addData(@PathVariable long id, @RequestBody Product product){
        User user = repository.getReferenceById(id);
        product = em.find(Product.class,product.getId());
        QueryBuilder builder = new QueryBuilder().select.add("t").from.add("Product t");
        builder = buildQuery(builder,"id",product.getId());
        builder.where.add("t.user IS NULL");

        product = builder.createQuery(em,Product.class).getSingleResult();

        user.addProduct(product);
        product.setUser(user);
        em.persist(user);
        em.persist(product);
    }

    @PutMapping("/addUser")
    public void addUser(@RequestBody User user){
        if(user.getFName() == null || user.getLName() == null){
            throw new RuntimeException("First name or Last name is null");
        }
        else if(user.getFName().isEmpty() || user.getLName().isEmpty()){
            throw new RuntimeException("First name or Last name is empty");
        }
        else{
            repository.saveAndFlush(user);
        }

    }

    //buildQuery will build a search query based on the parameters that were provided.
    public QueryBuilder buildQuery(QueryBuilder builder, String parameter,long value){
        builder.where.add("t."+parameter+" = :"+parameter);
        builder.setParameter(parameter,value);
        return builder;
    }
    //overloads the above function
    public QueryBuilder buildQuery(QueryBuilder builder, String parameter,String value){
        builder.where.add("t."+parameter+" = :"+parameter);
        builder.setParameter(parameter,value);
        return builder;
    }

    //Starts query by searching for the product's table
    public QueryBuilder startQuery(String table){
        QueryBuilder builder = new QueryBuilder().select.add("t").from.add("product t");
        builder.where.add("t.type = " + table);
        return builder;
    }
}
