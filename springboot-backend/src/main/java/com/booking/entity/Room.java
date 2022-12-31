package com.booking.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "_room")
public class Room {
    @Id
    @Column(name = "_id", nullable = false)
    private Integer id;

    @Column(name = "_room_number", nullable = false)
    private String roomNumber;

    @Column(name = "_status", nullable = false, length = 100)
    private String status;

    @Column(name = "_price", nullable = false)
    private Integer price;

    @Column(name = "_description", nullable = false)
    private String description;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "_hotel_id", nullable = false)
    private Hotel hotel;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(String roomNumber) {
        this.roomNumber = roomNumber;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }

}