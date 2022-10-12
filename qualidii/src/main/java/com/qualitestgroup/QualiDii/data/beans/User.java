package com.qualitestgroup.QualiDii.data.beans;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "seqGen2")
    @SequenceGenerator(name = "seqGen2",initialValue = 2)
    @Column(name = "UserID")
    private long UserID;

    @Column(name = "FName",nullable = false)
    private String FName;

    @Column(name ="LName",nullable = false)
    private String LName;

    @JoinTable(name="User_Product",
            joinColumns = @JoinColumn(
            name="UserID",referencedColumnName = "UserID"),
            inverseJoinColumns = @JoinColumn(name="ProductID",
            referencedColumnName = "id")
    )
    @OneToMany
    private List<Product> products;
    public User(){}
    public User(String FName, String LName){
        this.FName = FName;
        this.LName = LName;
    }

    public long getUserID() {
        return UserID;
    }

    public void setUserID(long userID) {
        UserID = userID;
    }

    public String getFName() {
        return FName;
    }

    public void setFName(String fname) {FName = fname;}

    public String getLName() {
        return LName;
    }

    public void setLName(String lname) {
        LName = lname;
    }

    @OneToMany(cascade = CascadeType.ALL, mappedBy="users")
    public List<Product> getProducts() {return products;}

    public void addProduct(Product product) {
        products.add(product);
    }

    public void deleteProduct(Product product){products.remove(product);}

    @Override
    public String toString(){
        return FName + " " + LName;
    }
}
