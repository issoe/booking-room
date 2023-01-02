package com.booking.controller;

import com.booking.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HotelController {
    @Autowired
    HotelService hotelService;

    @GetMapping("/hotels")
    public ResponseEntity<?> getAllHotels(){
        return hotelService.getAllHotels();
    }
}
