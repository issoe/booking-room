package com.booking.service;

import com.booking.response.OrderItem;
import com.booking.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;

    public ResponseEntity<?> getAllOrders(){
        List<Integer> ids = orderRepository.getListIds();
        List<OrderItem> orders = new ArrayList<>();
        for(Integer id : ids){
            OrderItem order = new OrderItem(orderRepository.getReferenceById(id));
            orders.add(order);
        }
        return ResponseEntity.ok(orders);
    }
}
