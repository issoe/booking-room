package com.booking.controller;

import com.booking.repository.AdminRepository;
import com.booking.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {
    @Autowired
    AdminService adminService;

    @GetMapping("/admin")
    public ResponseEntity<?> getAllStudents(){
        return adminService.temp();
    }
}
