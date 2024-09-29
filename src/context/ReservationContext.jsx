import { createContext, useState } from "react";

export const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const [reservation, setReservation] = useState(null);

  return (
    <ReservationContext.Provider value={{ reservation, setReservation }}>
      {children}
    </ReservationContext.Provider>
  );
};
