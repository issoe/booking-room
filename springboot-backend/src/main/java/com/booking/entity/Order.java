package com.booking.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "_order")
public class Order {
    @Id
    @Column(name = "_id", nullable = false)
    private Integer id;

    @Column(name = "_booking_date", nullable = false)
    private LocalDate bookingDate;

    @Column(name = "_number_of_customer", nullable = false)
    private Integer numberOfCustomer;

    @Column(name = "_check_in_date", nullable = false)
    private LocalDate checkInDate;

    @Column(name = "_check_out_date", nullable = false)
    private LocalDate checkOutDate;

    @Column(name = "_payment_status", nullable = false, length = 5)
    private String paymentStatus;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "_customer_id", nullable = false)
    private Customer customer;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDate getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(LocalDate bookingDate) {
        this.bookingDate = bookingDate;
    }

    public Integer getNumberOfCustomer() {
        return numberOfCustomer;
    }

    public void setNumberOfCustomer(Integer numberOfCustomer) {
        this.numberOfCustomer = numberOfCustomer;
    }

    public LocalDate getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(LocalDate checkInDate) {
        this.checkInDate = checkInDate;
    }

    public LocalDate getCheckOutDate() {
        return checkOutDate;
    }

    public void setCheckOutDate(LocalDate checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

}