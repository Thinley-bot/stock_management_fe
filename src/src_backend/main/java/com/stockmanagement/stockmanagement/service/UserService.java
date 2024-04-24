package com.stockmanagement.stockmanagement.service;

import com.stockmanagement.stockmanagement.model.User;
import com.stockmanagement.stockmanagement.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository repository;
    public void changePassword(ChangePasswordRequest request, Principal connectedUser) {

        var user = (User) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();

        // check if the current password is correct
        if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())) {
            throw new IllegalStateException("Wrong password");
        }
        // check if the two new passwords are the same
        if (!request.getNewPassword().equals(request.getConfirmationPassword())) {
            throw new IllegalStateException("Password are not the same");
        }

        // update the password
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));

        // save the new password
        repository.save(user);
    }

    public List<User> getAllUsers() {
        return repository.findAll();
    }
    public User getUserById(Long userId) {
        Optional<User> userOptional = repository.findById(userId);
        return userOptional.orElseThrow(() -> new NoSuchElementException("User not found with ID: " + userId));
    }

    public User getCurrentUser() {
        // Get the current authentication object
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) principal;
            // Assuming your User entity implements UserDetails
            return repository.findByEmail(userDetails.getUsername())
                    .orElseThrow(() -> new NoSuchElementException("User not found"));
        } else {
            throw new NoSuchElementException("User not found");
        }
    }

    public User getUserByEmail(String email) {
        Optional<User> userOptional = repository.findByEmail(email);
        return userOptional.orElseThrow(() -> new NoSuchElementException("User not found with email: " + email));
    }
}