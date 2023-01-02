package com.booking.service;

import com.booking.entity.Hotel;
import com.booking.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class HotelService {
    @Autowired
    HotelRepository hotelRepository;

    public ResponseEntity<?> getAllHotels(){
//        List<Hotel> hotels = hotelRepository.findAll().stream().toList();
        List<Hotel> hotels = new ArrayList<>();
        hotels.
        return ResponseEntity.ok(hotels);
    }
}
