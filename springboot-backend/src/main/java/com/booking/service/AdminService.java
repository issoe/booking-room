package com.booking.service;

import com.booking.Request.AccountRequest;
import com.booking.entity.Admin;
import com.booking.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    AdminRepository adminRepository;

    public ResponseEntity<?> temp(){
        return ResponseEntity.ok(adminRepository.findAll());
    }

//    public ResponseEntity<?> newAccountAdmin(AccountRequest acc){
//        try {
//            Admin myAdmin = new Admin(acc.getFullName(), acc.getUsername(), acc.getPassword());
//            adminRepository.save(myAdmin);
//            return ResponseEntity.ok("Success");
//        } catch (Exception e){
//            System.out.println(e);
//            return ResponseEntity.badRequest().body("Cant add new admin account");
//        }
//    }
    public ResponseEntity<?> checkLogin(AccountRequest acc){
        Integer status = adminRepository.checkAccount(acc.getUsername(), acc.getPassword());
        if (status != null)  return ResponseEntity.ok("Success");
        else return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No account found");
    }
}
