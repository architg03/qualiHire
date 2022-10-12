package com.qualitestgroup.QualiDii;

import com.qualitestgroup.QualiDii.data.repository.ProductRepository;
import com.qualitestgroup.QualiDii.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import java.util.Hashtable;

@SpringBootApplication
public class TdpApplication {
	//Holds which token corresponds with which table.
	@Autowired
	ProductRepository PRepository;
	@Autowired
	UserRepository URepository;
	public static Hashtable<String,String> dataDict = new Hashtable<String,String>();
	public static void main(String[] args) {

		dataDict.put("drone","Product");
		dataDict.put("laptop","Product");
		dataDict.put("car","Product");

		SpringApplication.run(TdpApplication.class, args);


	}

}
