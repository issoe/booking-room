package com.booking.service;

import com.booking.entity.Room;
import com.booking.repository.RoomRepository;
import com.booking.request.RoomRequest;
import com.booking.response.RoomItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoomService {
    @Autowired
    RoomRepository roomRepository;

    public ResponseEntity<?> getAllRoomById(Integer hotelId){
        List<Integer> myList = roomRepository.getListRoomFromHotelId(hotelId);
        List<RoomItem> rooms = new ArrayList<>();
        for(Integer id : myList){
            RoomItem room = new RoomItem(roomRepository.getReferenceById(id));
            rooms.add(room);
        }
        return ResponseEntity.ok(rooms);
    }
    public ResponseEntity<?> addNewRoom(RoomRequest roomRequest){
        try {
            Room room = new Room(roomRequest);
            roomRepository.save(room);
            return ResponseEntity.ok("Add new room successfully");
        } catch (Exception e){
            System.out.println(e);
            return ResponseEntity.badRequest().body("Cant add new room");
        }
    }
}
