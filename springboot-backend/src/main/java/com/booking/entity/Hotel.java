package com.booking.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "_hotel")
public class Hotel {
    @Id
    @Column(name = "_id", nullable = false)
    private Integer id;

    @Column(name = "_address", nullable = false)
    private String address;

    @Column(name = "_name", nullable = false)
    private String name;

    @Column(name = "_phone", nullable = false)
    private String phone;

    @Column(name = "_email", nullable = false)
    private String email;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "_hotel_owner_id")
    private HotelOwner hotelOwner;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "_admin_id")
    private Admin admin;
}