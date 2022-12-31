package com.booking.service;

import com.booking.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    AdminRepository adminRepository;

    public ResponseEntity<?> temp(){
        return ResponseEntity.ok(adminRepository.findAll());
    }
}
