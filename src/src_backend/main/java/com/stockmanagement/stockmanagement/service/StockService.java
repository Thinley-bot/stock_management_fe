package com.stockmanagement.stockmanagement.service;

import com.stockmanagement.stockmanagement.model.Stock;

import java.util.List;

public interface StockService {

    // Add stock
    String addStock(Stock stock);

    // Get all stocks
    List<Stock> getAllStock();

    // Get stock by ID
    Stock getStockById(long id);

    // Update stock
    String updateStock(Stock stock);

    // Delete stock by ID
    String deleteStockById(long id);
}
