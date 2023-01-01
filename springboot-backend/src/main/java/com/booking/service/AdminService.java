package com.booking.service;

import com.booking.Request.NewAccountRequest;
import com.booking.entity.Admin;
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

    public ResponseEntity<?> newAccountAdmin(NewAccountRequest newAcc){
        try {
            Admin myAdmin = new Admin(newAcc.getFullName(), newAcc.getUsername(), newAcc.getPassword());
            adminRepository.save(myAdmin);
            return ResponseEntity.ok("Success");
        } catch (Exception e){
            System.out.println(e);
            return ResponseEntity.badRequest().body("Cant add new admin account");
        }
    }
}
