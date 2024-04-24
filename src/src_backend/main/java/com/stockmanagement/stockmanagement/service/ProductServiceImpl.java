package com.stockmanagement.stockmanagement.service;

import com.stockmanagement.stockmanagement.model.Product;
import com.stockmanagement.stockmanagement.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public String addProduct(Product product) {
        productRepository.save(product);
        return "Product added successfully";
    }

    @Override
    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }
    @Override
    public Product getProductByName(String productName){
        return productRepository.findByProductName(productName);
    }

    @Override
    public Product getProductById(long id) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            return optionalProduct.get();
        }
        throw new RuntimeException("Product not found with id: " + id);
    }

    @Override
    public String updateProduct(long id, Product product) {
        Product existingProduct = getProductById(id);
        existingProduct.setProductName(product.getProductName());
        existingProduct.setProductCategory(product.getProductCategory());
        existingProduct.setPrice(product.getPrice());
        existingProduct.setLastUpdated(new Date());
        productRepository.save(existingProduct);
        return "Product updated successfully";
    }

    @Override
    public String deleteProductId(long id) {
        Product existingProduct = getProductById(id);
        productRepository.delete(existingProduct);
        return "Product deleted successfully";
    }
}
