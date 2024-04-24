package com.stockmanagement.stockmanagement.aspect;

import com.stockmanagement.stockmanagement.model.Product;
import com.stockmanagement.stockmanagement.model.Stock;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

import java.util.Date;

@Aspect
@Component
public class StockAspect {

    @Before("execution(* com.stockmanagement.stockmanagement.service.StockService.*(..)) && args(stock)")
    public void beforeStockOperation(Stock stock) {
        if (stock != null) {
            stock.setLastUpdates(new Date());
        }
    }

    @Before("execution(* com.stockmanagement.stockmanagement.service.ProductService.updateProduct(..)) && args(id, product)")
    public void updateProductLastUpdated(long id, Product product) {
        if (product != null) {
            product.setLastUpdated(new Date());
        }
    }
}
