package com.qualitestgroup.QualiDii.data.beans;

import javax.persistence.*;

@Entity
@Table(name="Request")
public class Request {
    @Id
    @GeneratedValue
    @SequenceGenerator(name = "seqGen4",initialValue = 100)
    private long id;
    @Column(name = "message")
    private String message;

    public Request(){}
    public Request(String message){
        this.message = message;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
