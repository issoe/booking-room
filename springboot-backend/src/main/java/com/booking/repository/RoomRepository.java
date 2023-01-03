package com.booking.repository;

import com.booking.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {
    @Query("SELECT r.id FROM Room r WHERE r.hotel.id = ?1")
    List<Integer> getListRoomFromHotelId(Integer hotelId);
}