package com.stockmanagement.stockmanagement.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long stockId;

    @ManyToOne
    @JoinColumn(name = "productId")
    private Product product;

    private int quantity;
    private String unit;
    private float price;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @Temporal(TemporalType.TIMESTAMP)
    private Date lastUpdates;

    public Long getStockId() {
        return stockId;
    }

    public void setStockId(Long stockId) {
        this.stockId = stockId;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public Date getLastUpdates() {
        return lastUpdates;
    }

    public void setLastUpdates(Date lastUpdates) {
        this.lastUpdates = lastUpdates;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    @Override
    public String toString() {
        return "Stock{" +
                "stockId=" + stockId +
                ", product=" + product +
                ", quantity=" + quantity +
                ", unit='" + unit + '\'' +
                ", price=" + price +
                ", user=" + user +
                ", lastUpdates=" + lastUpdates +
                '}';
    }
}
