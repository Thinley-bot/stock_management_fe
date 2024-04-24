package com.stockmanagement.stockmanagement.service;

import com.stockmanagement.stockmanagement.model.StockIssued;

import java.util.List;

public interface StockIssuedService {

    String addStockIssued(StockIssued stockIssued);

    List<StockIssued> getAllStockIssued();

    StockIssued getStockIssuedById(Long id);

    String updateStockIssued(StockIssued stockIssued);

    String deleteStockIssuedById(Long id);
}
