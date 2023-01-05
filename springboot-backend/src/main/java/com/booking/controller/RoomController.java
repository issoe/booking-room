package com.booking.controller;

import com.booking.request.IntegerRequest;
import com.booking.request.RoomRequest;
import com.booking.service.RoomService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class RoomController {
    @Autowired
    RoomService roomService;

    @GetMapping("/rooms")
    public ResponseEntity<?> getAllRoomById(@RequestParam Integer id){
        return roomService.getAllRoomById(id);
    }

    @PostMapping("/room")
    public ResponseEntity<?> addNewRoom(@RequestBody RoomRequest room){
        return roomService.addNewRoom(room);
    }
}
