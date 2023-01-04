package com.booking.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "_customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "_id", nullable = false)
    private Integer id;

    @Column(name = "_fullname", nullable = false)
    private String fullname;

    @Column(name = "_address", nullable = false)
    private String address;

    @Column(name = "_point")
    private Integer point;

    @Column(name = "_id_number", nullable = false)
    private String idNumber;

    @Column(name = "_phone", nullable = false)
    private String phone;

    @Column(name = "_email", nullable = false)
    private String email;

    @Column(name = "_username", nullable = false)
    private String username;

    @Column(name = "_password", nullable = false)
    private String password;
}