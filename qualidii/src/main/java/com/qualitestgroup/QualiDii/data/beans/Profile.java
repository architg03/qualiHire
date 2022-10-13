package com.qualitestgroup.QualiDii.data.beans;

import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="Profile")
public class Profile {
    @Column(name="UUID")
    @Id
    @GeneratedValue(generator = "seqGen3",strategy = GenerationType.AUTO)
    @SequenceGenerator(name="seqGen3",initialValue = 0)
    private long UUID;
    @Column(name="title")
    private String title;
    @Column(name = "description")
    private String description;
    @OneToOne
    private Product exampleData;
    @JoinTable(name="Profile_Product",
            joinColumns = @JoinColumn(
                    name="UUID",referencedColumnName = "UUID"),
            inverseJoinColumns = @JoinColumn(name="ProductID",
                    referencedColumnName = "ID")
    )
    @OneToMany
    private List<Product> Data;

    public Profile(){}
    public Profile(String title, String description, Product exampleData){
        this.title = title;
        this.description = description;
        this.exampleData = exampleData;
    }

    public void addData(Product product){
        Data.add(product);
    }
    public void deleteData(Product product){
        Data.remove(product);
    }

    public long getUUID() {
        return UUID;
    }

    public void setUUID(long UUID) {
        this.UUID = UUID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Product getExampleData() {
        return exampleData;
    }

    public void setExampleData(Product exampleData) {
        this.exampleData = exampleData;
    }

    public List<Product> getData() {
        return Data;
    }

    public void setData(List<Product> data) {
        Data = data;
    }
}
