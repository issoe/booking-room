package com.booking.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class RoomRequest {
    private String roomNumber;
    private String status;
    private Integer price;
    private String description;
    private Integer hotelId;
}
