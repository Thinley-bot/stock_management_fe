package com.stockmanagement.stockmanagement.controller;

import com.stockmanagement.stockmanagement.model.Stock;
import com.stockmanagement.stockmanagement.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stocks")
@CrossOrigin(value = "*")
public class StockController {

    @Autowired
    private StockService stockService;

    @PostMapping("/addstock")
    public String addStock(@RequestBody Stock stock) {
        System.out.println(stock);
        return stockService.addStock(stock);
    }

    @GetMapping("/getallstock")
    public List<Stock> getAllStocks() {
        return stockService.getAllStock();
    }

    @GetMapping("/{id}")
    public Stock getStockById(@PathVariable("id") long id) {
        return stockService.getStockById(id);
    }

    @PutMapping("/updatestock/{id}")
    public String updateStock(@PathVariable int id, @RequestBody Stock updateStock) {
        Stock existingStock = stockService.getStockById(id);
        existingStock.setProduct(updateStock.getProduct());
        existingStock.setQuantity(updateStock.getQuantity());
        existingStock.setPrice(updateStock.getPrice());
        existingStock.setUnit(updateStock.getUnit());
        return stockService.updateStock(existingStock);
    }

    @DeleteMapping("/deletestock/{id}")
    public String deleteStockById(@PathVariable("id") long id) {
        return stockService.deleteStockById(id);
    }
}
