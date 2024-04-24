package com.stockmanagement.stockmanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class StockmanagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockmanagementApplication.class, args);
	}

}
