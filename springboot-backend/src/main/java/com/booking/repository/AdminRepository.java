package com.booking.repository;

import com.booking.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
    @Query("SELECT t.id FROM Admin as t WHERE t.username = ?1 AND t.password = ?2")
    Integer checkAccount(String username, String password);
}