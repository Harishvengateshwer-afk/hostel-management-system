package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Complaint;
import com.example.demo.entity.LeaveRequest;
import com.example.demo.entity.Student;
import com.example.demo.service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public Student addStudent(@RequestBody Student student) {
        return studentService.addStudent(student);
    }

    @GetMapping("/all")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteStudent(@PathVariable Long id) {

        studentService.deleteStudent(id);

        return "Student Deleted Successfully";
    }

    @PostMapping("/apply-leave")
    public LeaveRequest applyLeave(@RequestBody LeaveRequest leaveRequest) {

        return studentService.applyLeave(leaveRequest);
    }

    @PostMapping("/complaint")
    public Complaint submitComplaint(@RequestBody Complaint complaint) {

        return studentService.submitComplaint(complaint);
    }
}