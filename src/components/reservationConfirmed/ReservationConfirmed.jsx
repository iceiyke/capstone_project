import { useContext } from "react";
import "./reservationConfirmed.css";
import { ReservationContext } from "../../context/ReservationContext";

const ReservationConfirmed = () => {
  const { reservation } = useContext(ReservationContext);

  if (!reservation) {
    return <h3 className="moveText">No reservation made yet!</h3>;
  }

  return (
    <div className="reservation">
      <h2>Reservation Confirmed</h2>
      <h4>Occasion: {reservation.occasion}</h4>
      <h4>Date: {reservation.date}</h4>
      <h4>Time: {reservation.time}</h4>
      <h4>Table Number: {reservation.table}</h4>
      <h4>Number of People: {reservation.people}</h4>
      <h4>Extra Requests: {reservation.comments}</h4>
    </div>
  );
};
export default ReservationConfirmed;
