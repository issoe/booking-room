package com.booking.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "_customer")
public class Customer {
    @Id
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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getPoint() {
        return point;
    }

    public void setPoint(Integer point) {
        this.point = point;
    }

    public String getIdNumber() {
        return idNumber;
    }

    public void setIdNumber(String idNumber) {
        this.idNumber = idNumber;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
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

}