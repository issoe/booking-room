package com.booking.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

}