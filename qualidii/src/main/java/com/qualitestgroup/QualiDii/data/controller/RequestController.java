package com.qualitestgroup.QualiDii.data.controller;

import com.qualitestgroup.QualiDii.data.beans.Request;
import com.qualitestgroup.QualiDii.data.repository.RequestRepository;
import com.tri.persistence.jpql.QueryBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8080/")
@RequestMapping("/requests")
public class RequestController {
    @Autowired
    EntityManager em;
    @Autowired
    RequestRepository repository;
    @GetMapping("/search")
    @CrossOrigin
    public List<Request> searchRequests(Long id){
        if(id == null || id.toString().isEmpty()){
            return repository.findAll();
        }
        Request request = repository.getReferenceById(id);
        QueryBuilder builder = new QueryBuilder().select.add("r").from.add("Request r");
        builder.where.add("r.id = :id");
        builder.setParameter("id",request.getId());
        return builder.createQuery(em,Request.class).getResultList();
    }


}
