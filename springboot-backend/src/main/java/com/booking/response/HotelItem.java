package com.booking.response;

import com.booking.entity.Hotel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
public class HotelItem {
    private Integer id;
    private String address;
    private String name;
    private String phone;
    private String email;

    public HotelItem(Hotel hotel){
        this.id = hotel.getId();
        this.address = hotel.getAddress();
        this.name = hotel.getName();
        this.phone = hotel.getPhone();
        this.email = hotel.getEmail();
    }
}
