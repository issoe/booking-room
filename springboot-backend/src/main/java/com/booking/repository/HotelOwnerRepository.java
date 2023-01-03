package com.booking.repository;

import com.booking.entity.HotelOwner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelOwnerRepository extends JpaRepository<HotelOwner, Integer> {
    @Query("SELECT t.id FROM HotelOwner as t WHERE t.username = ?1 AND t.password = ?2")
    Integer checkAccount(String username, String password);
}