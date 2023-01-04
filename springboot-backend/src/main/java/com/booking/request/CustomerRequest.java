package com.booking.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class CustomerRequest {
    private String fullname;
    private String address;
    private String phone;
    private String email;
    private String username;
    private String password;
}
