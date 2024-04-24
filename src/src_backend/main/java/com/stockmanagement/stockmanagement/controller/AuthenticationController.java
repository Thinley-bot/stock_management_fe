package com.stockmanagement.stockmanagement.controller;

import com.stockmanagement.stockmanagement.service.AuthenticationService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@CrossOrigin(value = "*")
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody RegisterRequest request
    ) {
        try {
            // Call the register method from the service
            AuthenticationResponse response = service.register(request);
            // Return the success response
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Check if it's a duplicate entry error
            if (e.getCause() instanceof org.hibernate.exception.ConstraintViolationException) {
                String errorMessage = "Email address is already registered.";
                // Return an error response with the appropriate status code and error message
                return ResponseEntity.status(HttpStatus.CONFLICT).body(errorMessage);
            }
            // If it's another type of error, return an internal server error response
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred: " + e.getMessage());
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        try {
            // Call the authenticate method from the service
            AuthenticationResponse response = service.authenticate(request);
            // Return the success response
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // If an exception occurs, return an error response with the appropriate status code
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed: " + e.getMessage());
        }
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<?> refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        try {
            // Call the refreshToken method from the service
            service.refreshToken(request, response);
            // Return a success response with no content
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            // If an exception occurs, return an error response with the appropriate status code
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred: " + e.getMessage());
        }
    }


}
