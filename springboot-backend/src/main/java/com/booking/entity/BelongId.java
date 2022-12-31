package com.booking.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import org.hibernate.Hibernate;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class BelongId implements Serializable {
    private static final long serialVersionUID = 5219416174235069694L;
    @Column(name = "_order_id", nullable = false)
    private Integer orderId;

    @Column(name = "_room_id", nullable = false)
    private Integer roomId;

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Integer getRoomId() {
        return roomId;
    }

    public void setRoomId(Integer roomId) {
        this.roomId = roomId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        BelongId entity = (BelongId) o;
        return Objects.equals(this.orderId, entity.orderId) &&
                Objects.equals(this.roomId, entity.roomId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(orderId, roomId);
    }

}