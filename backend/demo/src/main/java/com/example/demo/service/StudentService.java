package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Complaint;
import com.example.demo.entity.LeaveRequest;
import com.example.demo.entity.Student;
import com.example.demo.repository.ComplaintRepository;
import com.example.demo.repository.LeaveRequestRepository;
import com.example.demo.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private LeaveRequestRepository leaveRequestRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private ComplaintRepository complaintRepository;

    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }

    public LeaveRequest applyLeave(LeaveRequest leaveRequest) {

        leaveRequest.setStatus("PENDING");

        return leaveRequestRepository.save(leaveRequest);
    }

    public Complaint submitComplaint(Complaint complaint) {

        complaint.setStatus("OPEN");

        return complaintRepository.save(complaint);
    }
}