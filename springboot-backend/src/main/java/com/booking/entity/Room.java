package com.booking.entity;

import com.booking.request.RoomRequest;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "_room")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @Column(name = "_hotel_id", nullable = false)
    private Integer hotelId;

    public Room(RoomRequest room){
        this.roomNumber = room.getRoomNumber();
        this.status = room.getStatus();
        this.price = room.getPrice();
        this.description = room.getDescription();
        this.hotelId = room.getHotelId();
    }
}