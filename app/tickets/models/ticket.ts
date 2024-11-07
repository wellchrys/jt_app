export type TicketId = number;

export interface Ticket {
  id: TicketId;
  ticketName: string;
  ticketValue: string;
  ticketDiscountValue: string;
  ticketLocation: string;
  ticketGrade: string;
  ticketReviews: string;
  ticketImg: string;
}
