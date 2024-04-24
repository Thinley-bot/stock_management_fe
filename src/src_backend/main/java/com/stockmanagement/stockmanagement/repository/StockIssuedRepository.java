package com.stockmanagement.stockmanagement.repository;

import com.stockmanagement.stockmanagement.model.StockIssued;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockIssuedRepository extends JpaRepository<StockIssued, Long> {
}
