package com.booking.service;

import com.booking.request.IntegerRequest;
import com.booking.repository.RoomRepository;
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
}
