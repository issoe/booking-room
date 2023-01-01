package com.booking.Request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class NewAccountRequest {
    private String fullName;
    private String username;
    private String password;
}
