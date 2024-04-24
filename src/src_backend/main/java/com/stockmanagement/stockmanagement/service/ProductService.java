package com.stockmanagement.stockmanagement.service;

import com.stockmanagement.stockmanagement.model.Product;

import java.util.List;

public interface ProductService {

    // Add a product
    String addProduct(Product product);

    Product getProductByName(String productName);

    // Retrieve all products
    List<Product> getAllProduct();

    // Retrieve a product by its ID
    Product getProductById(long id);

    // Update a product
    String updateProduct(long id, Product product);

    // Delete a product by its ID
    String deleteProductId(long id);
}
