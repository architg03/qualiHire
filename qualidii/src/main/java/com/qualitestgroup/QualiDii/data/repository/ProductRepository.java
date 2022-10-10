package com.qualitestgroup.QualiDii.data.repository;

import com.qualitestgroup.QualiDii.data.beans.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
}
