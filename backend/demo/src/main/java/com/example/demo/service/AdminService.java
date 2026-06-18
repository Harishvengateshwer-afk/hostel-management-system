package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Room;
import com.example.demo.entity.Student;
import com.example.demo.repository.RoomRepository;
import com.example.demo.repository.StudentRepository;

@Service
public class AdminService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
private StudentRepository studentRepository;

    public Room addRoom(Room room) {
        return roomRepository.save(room);
    }
    
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    public void deleteRoom(Long id) {
    roomRepository.deleteById(id);
    }

    public Room updateRoom(Long id, Room updatedRoom) {

    Room room = roomRepository.findById(id).orElse(null);

    if(room != null) {
        room.setRoomNumber(updatedRoom.getRoomNumber());
        room.setCapacity(updatedRoom.getCapacity());

        return roomRepository.save(room);
    }

    return null;
    }

    public Student allocateRoom(Long studentId, Long roomId) {

    Student student = studentRepository.findById(studentId).orElse(null);

    if(student != null) {
        student.setRoomId(roomId);
        return studentRepository.save(student);
    }

    return null;
    }

}