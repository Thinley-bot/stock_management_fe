package com.stockmanagement.stockmanagement.model;

import jakarta.persistence.*;

@Entity
public class StockIssued {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long stockIssueId;

    private int stockQuantity;
    private String stockUnit;
    private int stockCost;

    @ManyToOne
    @JoinColumn(name = "stockId")
    private Stock stock;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User stockIssueUser;

    public Long getStockIssueId() {
        return stockIssueId;
    }

    public void setStockIssueId(Long stockIssueId) {
        this.stockIssueId = stockIssueId;
    }

    public int getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(int stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    public String getStockUnit() {
        return stockUnit;
    }

    public void setStockUnit(String stockUnit) {
        this.stockUnit = stockUnit;
    }

    public int getStockCost() {
        return stockCost;
    }

    public void setStockCost(int stockCost) {
        this.stockCost = stockCost;
    }

    public Stock getStock() {
        return stock;
    }

    public void setStock(Stock stock) {
        this.stock = stock;
    }

    public User getStockIssueUser() {
        return stockIssueUser;
    }

    public void setStockIssueUser(User stockIssueUser) {
        this.stockIssueUser = stockIssueUser;
    }
}
