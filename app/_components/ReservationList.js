"use client";

import { useOptimistic } from "react";
import { deleteReservation } from "../_lib/actions";
import ReservationCard from "./ReservationCard";

export default function ReservationList({ bookings }) {
  const [optBookings, optDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  async function handleDelete(bookingId) {
    optDelete(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
