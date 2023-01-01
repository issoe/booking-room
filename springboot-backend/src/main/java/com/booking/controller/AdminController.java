package com.booking.controller;

import com.booking.Request.NewAccountRequest;
import com.booking.repository.AdminRepository;
import com.booking.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class AdminController {
    @Autowired
    AdminService adminService;

    @GetMapping("/admin")
    public ResponseEntity<?> getAllAdminAccount(){
        return adminService.temp();
    }
    @PostMapping("/admin")
    public ResponseEntity<?> newAccoutAdmin(@RequestBody NewAccountRequest newAcc){
        return adminService.newAccountAdmin(newAcc);
    }
}
