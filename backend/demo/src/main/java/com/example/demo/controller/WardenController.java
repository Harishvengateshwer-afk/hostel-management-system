package com.example.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.Complaint;
import com.example.demo.entity.LeaveRequest;
import com.example.demo.service.WardenService;

@RestController
@RequestMapping("/warden")
@CrossOrigin(origins = "http://localhost:5173")
public class WardenController {

    @Autowired
    private WardenService wardenService;

    @GetMapping("/leave-requests")
    public List<LeaveRequest> getAllLeaveRequests() {
        return wardenService.getAllLeaveRequests();
    }

    @PutMapping("/approve/{id}")
    public LeaveRequest approveLeave(@PathVariable Long id) {
        return wardenService.approveLeave(id);
    }

    @PutMapping("/reject/{id}")
    public LeaveRequest rejectLeave(@PathVariable Long id) {
        return wardenService.rejectLeave(id);
    }
    @GetMapping("/complaints")
    public List<Complaint> getAllComplaints() {
        return wardenService.getAllComplaints();
    }

    @PutMapping("/resolve/{id}")
    public Complaint resolveComplaint(@PathVariable Long id) {
    return wardenService.resolveComplaint(id);
    }
}