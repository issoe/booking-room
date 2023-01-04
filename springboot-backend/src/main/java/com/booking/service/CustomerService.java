package com.booking.service;

import com.booking.entity.Customer;
import com.booking.repository.CustomerRepository;
import com.booking.request.CustomerRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepository;
    public ResponseEntity<?> signup(CustomerRequest customerRequest){
        try {
            Customer customer = new Customer(customerRequest);
            customerRepository.save(customer);
            return ResponseEntity.ok("Add new customer successfully");
        } catch (Exception e){
            System.out.println(e);
            return ResponseEntity.badRequest().body("Cant add new customer account");
        }
    }
}
