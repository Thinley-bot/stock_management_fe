package com.stockmanagement.stockmanagement.repository;

import com.stockmanagement.stockmanagement.model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository extends JpaRepository<Stock,Long> {
}
