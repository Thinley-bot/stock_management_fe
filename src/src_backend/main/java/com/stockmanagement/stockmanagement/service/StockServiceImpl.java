package com.stockmanagement.stockmanagement.service;

import com.stockmanagement.stockmanagement.model.Stock;
import com.stockmanagement.stockmanagement.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StockServiceImpl implements StockService {

    @Autowired
    private StockRepository stockRepository;

    @Override
    public String addStock(Stock stock) {
        stockRepository.save(stock);
        return "Stock added successfully";
    }

    @Override
    public List<Stock> getAllStock() {
        return stockRepository.findAll();
    }

    @Override
    public Stock getStockById(long id) {
        Optional<Stock> stockOptional = stockRepository.findById(id);
        return stockOptional.orElse(null);
    }

    @Override
    public String updateStock(Stock stock) {
        if (stockRepository.existsById(stock.getStockId())) {
            stockRepository.save(stock);
            return "Stock updated successfully";
        } else {
            return "Stock not found";
        }
    }

    @Override
    public String deleteStockById(long id) {
        if (stockRepository.existsById(id)) {
            stockRepository.deleteById(id);
            return "Stock deleted successfully";
        } else {
            return "Stock not found";
        }
    }
}
