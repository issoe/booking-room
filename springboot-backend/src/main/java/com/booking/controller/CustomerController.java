package com.booking.controller;

import com.booking.request.CustomerRequest;
import com.booking.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {
    @Autowired
    CustomerService customerService;

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody CustomerRequest customerRequest){
        return customerService.signup(customerRequest);
    }
}
