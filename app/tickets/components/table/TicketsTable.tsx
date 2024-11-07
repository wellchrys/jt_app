import { Ticket } from "@/app/tickets/models/ticket";
import TicketsTableItem from "./TicketTableItem";
import { Table, TableBody } from "@/components/ui/table";

type Props = {
  tickets: Ticket[];
  onClickEditButton: (id: number) => void;
};

export default function TicketsTable({ tickets, onClickEditButton }: Props) {
  return (
    <>
      <Table style={{ borderCollapse: "separate", borderSpacing: "10px" }}>
        <TableBody>
          {tickets.map((ticket) => (
            <TicketsTableItem
              key={ticket.id}
              ticket={ticket}
              onClickEditButton={onClickEditButton}
            />
          ))}
        </TableBody>
      </Table>
    </>
  );
}
