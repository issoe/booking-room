package com.booking.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "_hotel_owner")
public class HotelOwner {
    @Id
    @Column(name = "_id", nullable = false)
    private Integer id;

    @Column(name = "_name", nullable = false)
    private String name;

    @Column(name = "_email", nullable = false)
    private String email;

    @Column(name = "_username", nullable = false)
    private String username;

    @Column(name = "_password", nullable = false)
    private String password;

    @Column(name = "_phone")
    private Integer phone;
}