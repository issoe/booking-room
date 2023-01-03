package com.booking.service;

import com.booking.repository.CustomerRepository;
import com.booking.repository.HotelOwnerRepository;
import com.booking.repository.HotelRepository;
import com.booking.request.AccountRequest;
import com.booking.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    @Autowired
    AdminRepository adminRepository;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    HotelOwnerRepository hotelOwnerRepository;

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
        Integer isAdmin = adminRepository.checkAccount(acc.getUsername(), acc.getPassword());
        if (isAdmin != null)  return ResponseEntity.ok("Admin login successfully");

        Integer isCustomer = customerRepository.checkAccount(acc.getUsername(), acc.getPassword());
        if (isCustomer != null) return ResponseEntity.ok("Customer login successfully");

        Integer isHotelOwner = hotelOwnerRepository.checkAccount(acc.getUsername(), acc.getPassword());
        if (isHotelOwner != null) return ResponseEntity.ok("HotelOwner login successfully");

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No account found");
    }
}
