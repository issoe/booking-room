package com.booking.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class HotelRequest {
    private String address;
    private String name;
    private String email;
    private String phone;
    private Integer hotelOwnerId;
    private Integer adminId;
}
