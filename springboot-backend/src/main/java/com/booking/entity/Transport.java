package com.booking.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "_transport")
public class Transport {
    @Id
    @Column(name = "_id", nullable = false)
    private Integer id;

    @Column(name = "_owner_name", nullable = false)
    private String ownerName;

    @Column(name = "_type", nullable = false)
    private String type;

    @Column(name = "_phone", nullable = false)
    private Integer phone;

    @Column(name = "_price_per_day", nullable = false)
    private Integer pricePerDay;

    @Column(name = "_status", nullable = false)
    private Integer status;

    @Column(name = "_distance", nullable = false)
    private Integer distance;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public Integer getPricePerDay() {
        return pricePerDay;
    }

    public void setPricePerDay(Integer pricePerDay) {
        this.pricePerDay = pricePerDay;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getDistance() {
        return distance;
    }

    public void setDistance(Integer distance) {
        this.distance = distance;
    }

}