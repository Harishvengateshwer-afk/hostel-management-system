package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.LeaveRequest;
import com.example.demo.repository.LeaveRequestRepository;

@Service
public class LeaveService {

    @Autowired
    private LeaveRequestRepository leaveRepository;

    public List<LeaveRequest> getAllLeaves() {
        return leaveRepository.findAll();
    }

    public LeaveRequest updateStatus(Long id, String status) {

        LeaveRequest leave =
                leaveRepository.findById(id).orElseThrow();

        leave.setStatus(status);

        return leaveRepository.save(leave);
    }
}