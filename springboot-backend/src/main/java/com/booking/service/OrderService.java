package com.booking.service;

import com.booking.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;

    public ResponseEntity<?> getAllOrders(){

        return ResponseEntity.ok("nicers");
    }

}
