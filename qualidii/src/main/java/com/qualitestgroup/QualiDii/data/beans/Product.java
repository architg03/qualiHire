package com.qualitestgroup.QualiDii.data.beans;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "seqGen")
    @SequenceGenerator(name = "seqGen",initialValue = 6)
    @Column(name = "ID",unique = true,nullable = false)
    private long id;
    @Column(name = "TYPE",nullable = false)
    private String type;

    @Column(name = "NAME",nullable = false)
    private String name;

    @ManyToOne
    private User user;

    public Product(){
    }
    public Product(String token, String name){
        this.type = token;
        this.name = name;
    }
    public long getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public String getName() {
        return name;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setName(String name) {
        this.name = name;
    }

    //If the user is null, then return null as the name.
    public String getUser(){return user != null ? user.toString() : null;}
    //If the user is null, return the id as null.
    public Long getUserID(){return user != null ? user.getUserID() : null;}
    public void setUser(User user) {this.user = user;}

    public void deleteUser(){user = null;}

}
