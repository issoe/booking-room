package com.booking.controller;

import com.booking.Request.AccountRequest;
import com.booking.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class AdminController {
    @Autowired
    AdminService adminService;
    // link, get, response, request, status
    @GetMapping("/admin")
    public ResponseEntity<?> getAllAdminAccount(){
        return adminService.temp();
    }
    @PostMapping("/admin")
    public ResponseEntity<?> checkLogin(@RequestBody AccountRequest account){
        return adminService.checkLogin(account);
    }
}
