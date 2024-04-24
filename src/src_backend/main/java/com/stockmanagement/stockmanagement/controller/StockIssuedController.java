package com.stockmanagement.stockmanagement.controller;

import com.stockmanagement.stockmanagement.model.StockIssued;
import com.stockmanagement.stockmanagement.service.StockIssuedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stock-issued")
@CrossOrigin(value = "*")
public class StockIssuedController {

    @Autowired
    private StockIssuedService stockIssuedService;

    @PostMapping("/add")
    public String addStockIssued(@RequestBody StockIssued stockIssued) {
        return stockIssuedService.addStockIssued(stockIssued);
    }

    @GetMapping("/all")
    public List<StockIssued> getAllStockIssued() {
        return stockIssuedService.getAllStockIssued();
    }

    @GetMapping("/{id}")
    public StockIssued getStockIssuedById(@PathVariable("id") Long id) {
        return stockIssuedService.getStockIssuedById(id);
    }

    @PutMapping("/update")
    public String updateStockIssued(@RequestBody StockIssued stockIssued) {
        return stockIssuedService.updateStockIssued(stockIssued);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteStockIssuedById(@PathVariable("id") Long id) {
        return stockIssuedService.deleteStockIssuedById(id);
    }
}
