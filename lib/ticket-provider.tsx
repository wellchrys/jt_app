"use client";

import React, { createContext, useState, useContext } from "react";

type TicketContextData = {
  ticketId(id: number): void;
  id: number | undefined;
};

export const TicketContext = createContext<TicketContextData>(
  {} as TicketContextData
);

const TicketProvider = ({ children }: { children: React.ReactNode }) => {
  const [id, setId] = useState<number>();

  const ticketId = (id: number) => {
    setId(id);
  };

  return (
    <TicketContext.Provider
      value={{
        ticketId,
        id,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

function useTicket(): TicketContextData {
  const context = useContext(TicketContext);

  if (!context) {
    throw new Error("TicketProvider is required!");
  }

  return context;
}

export { TicketProvider, useTicket };
