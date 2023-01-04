package com.booking.entity;

import com.booking.request.HotelRequest;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "_hotel")
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "_id", nullable = false)
    private Integer id;

    @Column(name = "_address", nullable = false)
    private String address;

    @Column(name = "_name", nullable = false)
    private String name;

    @Column(name = "_phone", nullable = false)
    private String phone;

    @Column(name = "_email", nullable = false)
    private String email;;

    @Column (name = "_hotel_owner_id")
    private Integer hotelOwnerId;

    @Column(name = "_admin_id")
    private Integer adminId;

    public Hotel(HotelRequest hotelRequest){
        this.address = hotelRequest.getAddress();
        this.name = hotelRequest.getName();
        this.phone = hotelRequest.getPhone();
        this.email = hotelRequest.getEmail();
        this.hotelOwnerId = hotelRequest.getHotelOwnerId();
        this.adminId = hotelRequest.getAdminId();
    }
}