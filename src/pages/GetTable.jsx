import ReservationConfirmed from "../components/reservationConfirmed/ReservationConfirmed";
import ReserveTable from "../components/reserveTable/ReserveTable";

const GetTable = () => {
  return (
    <div>
      <h1>Table Reservation System</h1>
      <ReserveTable />
      <ReservationConfirmed />
    </div>
  );
};
export default GetTable;
