package com.booking.repository;

import com.booking.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    @Query("SELECT t.id FROM Customer as t WHERE t.username = ?1 AND t.password = ?2")
    Integer checkAccount(String username, String password);
}