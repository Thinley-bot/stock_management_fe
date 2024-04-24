package com.stockmanagement.stockmanagement.service;

import com.stockmanagement.stockmanagement.model.StockIssued;
import com.stockmanagement.stockmanagement.repository.StockIssuedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StockIssuedServiceImpl implements StockIssuedService {

    @Autowired
    private StockIssuedRepository stockIssuedRepository;

    @Override
    public String addStockIssued(StockIssued stockIssued) {
        stockIssuedRepository.save(stockIssued);
        return "Stock issued added successfully";
    }

    @Override
    public List<StockIssued> getAllStockIssued() {
        return stockIssuedRepository.findAll();
    }

    @Override
    public StockIssued getStockIssuedById(Long id) {
        Optional<StockIssued> stockIssuedOptional = stockIssuedRepository.findById(id);
        return stockIssuedOptional.orElse(null);
    }

    @Override
    public String updateStockIssued(StockIssued stockIssued) {
        if (stockIssuedRepository.existsById(stockIssued.getStockIssueId())) {
            stockIssuedRepository.save(stockIssued);
            return "Stock issued updated successfully";
        } else {
            return "Stock issued not found";
        }
    }

    @Override
    public String deleteStockIssuedById(Long id) {
        if (stockIssuedRepository.existsById(id)) {
            stockIssuedRepository.deleteById(id);
            return "Stock issued deleted successfully";
        } else {
            return "Stock issued not found";
        }
    }
}
