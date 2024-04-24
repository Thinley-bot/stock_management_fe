package com.stockmanagement.stockmanagement.controller;

import com.stockmanagement.stockmanagement.model.Product;
import com.stockmanagement.stockmanagement.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(value = "*")
public class ProductController {

    @Autowired
    private ProductService productService;
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProduct();
    }
    @PostMapping
    public String addProduct(@RequestBody Product product) {
        // Set the current date and time before adding the product
        product.setLastUpdated(new Date());
        // Call the service method to add the product
        return productService.addProduct(product);
    }

    @GetMapping("/productname")
    public Product getProductByName(String name) {
        return productService.getProductByName(name);
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable("id") long id) {
        return productService.getProductById(id);
    }

    @PutMapping("/update/{id}")
    public String updateProduct(@PathVariable("id") long id, @RequestBody Product product) {
        // Set the current date and time before updating the product
        product.setLastUpdated(new Date());

        // Call the service method to update the product
        return productService.updateProduct(id, product);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteProductById(@PathVariable("id") long id) {
        // Call the service method to delete the product
        return productService.deleteProductId(id);
    }
}
