package com.booking.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity @Getter @Setter
@Table(name = "_admin")
public class Admin {
    @Id
    @Column(name = "_id", nullable = false)
    private Integer id;

    @Column(name = "_fullname", nullable = false)
    private String fullname;

    @Column(name = "_username", nullable = false)
    private String username;

    @Column(name = "_password", nullable = false)
    private String password;
}