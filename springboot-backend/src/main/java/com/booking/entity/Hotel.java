package com.booking.entity;

import jakarta.persistence.*;

@Entity
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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public HotelOwner getHotelOwner() {
        return hotelOwner;
    }

    public void setHotelOwner(HotelOwner hotelOwner) {
        this.hotelOwner = hotelOwner;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

}