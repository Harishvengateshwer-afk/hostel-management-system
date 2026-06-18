package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Complaint;
import com.example.demo.entity.LeaveRequest;
import com.example.demo.repository.ComplaintRepository;
import com.example.demo.repository.LeaveRequestRepository;

@Service
public class WardenService {

    @Autowired
    private LeaveRequestRepository leaveRequestRepository;

    @Autowired
    private ComplaintRepository complaintRepository;

    public List<LeaveRequest> getAllLeaveRequests() {
        return leaveRequestRepository.findAll();
    }

    public LeaveRequest approveLeave(Long id) {
        LeaveRequest leave =leaveRequestRepository.findById(id).orElse(null);
        if (leave != null) {leave.setStatus("APPROVED");
            return leaveRequestRepository.save(leave);
        }
        return null;
    }

    public LeaveRequest rejectLeave(Long id) {
        LeaveRequest leave =leaveRequestRepository.findById(id).orElse(null);
        if (leave != null) {leave.setStatus("REJECTED");
            return leaveRequestRepository.save(leave);
        }
        return null;
    }

    public List<Complaint> getAllComplaints() {
    return complaintRepository.findAll();
}

    public Complaint resolveComplaint(Long id) {
    Complaint complaint =complaintRepository.findById(id).orElse(null);
    if (complaint != null) {complaint.setStatus("RESOLVED");
        return complaintRepository.save(complaint);
    }
    return null;
    }
}