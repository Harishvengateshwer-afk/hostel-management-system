package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Complaint;
import com.example.demo.repository.ComplaintRepository;

@Service
public class ComplaintService {

    @Autowired
    private ComplaintRepository complaintRepository;

    public List<Complaint> getAllComplaints() {
        return complaintRepository.findAll();
    }

    public Complaint resolveComplaint(Long id) {

        Complaint complaint =
                complaintRepository.findById(id)
                .orElseThrow();

        complaint.setStatus("RESOLVED");

        return complaintRepository.save(complaint);
    }
}