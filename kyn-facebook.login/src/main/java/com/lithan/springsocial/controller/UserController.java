package com.lithan.springsocial.controller;

import com.lithan.springsocial.exception.ResourceNotFoundException;
import com.lithan.springsocial.model.User;
import com.lithan.springsocial.repository.UserRepository;
import com.lithan.springsocial.security.CurrentUser;
import com.lithan.springsocial.security.UserPrincipal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }
}
