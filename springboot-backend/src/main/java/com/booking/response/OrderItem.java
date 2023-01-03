package com.booking.response;

import com.booking.entity.Order;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter
public class OrderItem {
    private Integer id;
    private LocalDate bookingDate;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;

    private String paymentStatus;
    private Integer numberOfCustomer;

    public OrderItem(Order order){
        this.id = order.getId();
        this.bookingDate = order.getBookingDate();
        this.checkInDate = order.getCheckInDate();
        this.checkOutDate = order.getCheckOutDate();
        this.paymentStatus = order.getPaymentStatus();
        this.numberOfCustomer = order.getNumberOfCustomer();
    }
}
