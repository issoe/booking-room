package com.booking.controller;

import com.booking.request.IntegerRequest;
import com.booking.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RoomController {
    @Autowired
    RoomService roomService;

    @GetMapping("/rooms")
    public ResponseEntity<?> getAllRoomById(@RequestBody IntegerRequest id){
        return roomService.getAllRoomById(id);
    }
}
