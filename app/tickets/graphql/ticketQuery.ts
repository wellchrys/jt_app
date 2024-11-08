import { gql } from "@apollo/client";
import { Ticket } from "../models/ticket";

export interface TicketQueryVariables {
  id: string;
}

export interface ConsumerUnitUpdated {
  ticket: Ticket;
}

export const ConsumerUnitTypename = "Ticket";

export const TICKET_QUERY = gql`
  query ticket($id: ID!) {
    ticket(id: $id) {
      id
      ticketName
      ticketValue
      ticketDiscountValue
      ticketLocation
      ticketGrade
      ticketReviews
      ticketImg
    }
  }
`;
