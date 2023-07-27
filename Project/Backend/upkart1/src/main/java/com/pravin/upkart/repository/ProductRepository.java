package com.pravin.upkart.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pravin.upkart.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategory(String category);
}


