package com.booking.controller;

import com.booking.request.AccountRequest;
import com.booking.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class LoginController {
    @Autowired
    LoginService loginService;
    // link, get, response, request, status
    @GetMapping("/login")
    public ResponseEntity<?> getAllAdminAccount(){
        return loginService.temp();
    }
    @PostMapping("/login")
    public ResponseEntity<?> checkLogin(@RequestBody AccountRequest account){
        return loginService.checkLogin(account);
    }
}
