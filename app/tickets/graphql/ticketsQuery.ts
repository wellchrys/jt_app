import { gql } from "@apollo/client";
import { Ticket } from "../models/ticket";

interface TicketConnection {
  afterCursor: string | null;
  beforeCursor: string | null;
  entries: Ticket[];
}

export interface TicketList {
  tickets: TicketConnection;
}

export const ticketsTypename = "TicketConnection";

export const TICKETS_QUERY = gql`
  query tickets(
    $after: String
    $before: String
    $pageSize: Int
    $filters: TicketFilterOptions
  ) {
    tickets(
      after: $after
      before: $before
      pageSize: $pageSize
      filters: $filters
    ) {
      entries {
        id
        ticketName
        ticketValue
        ticketDiscountValue
        ticketLocation
        ticketGrade
        ticketReviews
        ticketImg
      }
      beforeCursor
      afterCursor
    }
  }
`;
