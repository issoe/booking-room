package com.booking.service;

import com.booking.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class HotelService {
    @Autowired
    HotelRepository hotelRepository;

    public ResponseEntity<?> getAllHotels(){
        return ResponseEntity.ok(hotelRepository.findAll());
    }
}
