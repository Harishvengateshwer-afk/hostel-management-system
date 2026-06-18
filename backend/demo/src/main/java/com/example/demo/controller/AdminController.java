package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.AllocateRoomRequest;
import com.example.demo.entity.Complaint;
import com.example.demo.entity.LeaveRequest;
import com.example.demo.entity.Room;
import com.example.demo.entity.Student;
import com.example.demo.service.AdminService;
import com.example.demo.service.ComplaintService;
import com.example.demo.service.LeaveService;



@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private LeaveService leaveService;

    @Autowired
    private ComplaintService complaintService;

    @PostMapping("/add-room")
    public Room addRoom(@RequestBody Room room) {
        return adminService.addRoom(room);
    }

    @GetMapping("/rooms")
    public List<Room> getAllRooms() {
        return adminService.getAllRooms();
    }

    @GetMapping("/leaves")
    public List<LeaveRequest> getAllLeaves() {
    return leaveService.getAllLeaves();
    }

    @GetMapping("/complaints")
    public List<Complaint> getAllComplaints() {
    return complaintService.getAllComplaints();
    }

    @DeleteMapping("/room/{id}")
    public String deleteRoom(@PathVariable Long id) {
    adminService.deleteRoom(id);
    return "Room Deleted Successfully";
    }

    @PutMapping("/room/{id}")
    public Room updateRoom(@PathVariable Long id,@RequestBody Room room) {
    return adminService.updateRoom(id, room);
    }

    @PutMapping("/leave/approve/{id}")
    public LeaveRequest approveLeave(@PathVariable Long id) {
    return leaveService.updateStatus(id,"APPROVED");
    }

    @PutMapping("/leave/reject/{id}")
    public LeaveRequest rejectLeave(@PathVariable Long id) {
    return leaveService.updateStatus(id,"REJECTED");
    }

    @PutMapping("/allocate-room")
    public Student allocateRoom(@RequestBody AllocateRoomRequest request) {
    return adminService.allocateRoom(request.getStudentId(),request.getRoomId());
    }

    @PutMapping("/complaint/resolve/{id}")
    public Complaint resolveComplaint(@PathVariable Long id) {
    return complaintService.resolveComplaint(id);
}
}