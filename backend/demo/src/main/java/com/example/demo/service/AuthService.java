package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.SignupRequest;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public String signup(SignupRequest request) {

        User existingUser =
                userRepository.findByEmail(request.getEmail());

        if (existingUser != null) {
            return "Email Already Exists";
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setRole(request.getRole());

        userRepository.save(user);

        return "Signup Successful";
    }

    public String login(LoginRequest request) {

        User user =
                userRepository.findByEmail(request.getEmail());

        if (user == null) {
            return "User Not Found";
        }

        if (!user.getPassword().equals(request.getPassword())) {
            return "Invalid Password";
        }

        return user.getRole();
    }
}