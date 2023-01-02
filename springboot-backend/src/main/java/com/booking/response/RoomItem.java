package com.booking.response;

import com.booking.entity.Room;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RoomItem {
    private Integer id;
    private String roomNumber;
    private String status;
    private Integer price;
    private String description;

    public RoomItem(Room room){
        this.id = room.getId();
        this.roomNumber = room.getRoomNumber();
        this.status = room.getStatus();
        this.price = room.getPrice();
        this.description = room.getDescription();
    }
}
