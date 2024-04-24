package com.stockmanagement.stockmanagement.repository;

import com.stockmanagement.stockmanagement.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
    Product findByProductName(String productName);
}
