package com.booking.service;

import com.booking.repository.HotelRepository;
import com.booking.response.HotelItem;
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
        List<HotelItem> hotels = new ArrayList<>();
        List<Integer> listId = hotelRepository.listId();
        for(Integer id : listId){
            HotelItem hotel = new HotelItem(hotelRepository.getReferenceById(id));
            hotels.add(hotel);
        }
        return ResponseEntity.ok(hotels);
    }
}
