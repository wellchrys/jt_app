import { Ticket } from "@/app/tickets/models/ticket";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

type Props = {
  ticket: Ticket;
  onClickEditButton: (id: number) => void;
};

export default function TicketTableItem({
  ticket: {
    id,
    ticketGrade,
    ticketLocation,
    ticketName,
    ticketValue,
    ticketDiscountValue,
    ticketReviews,
    ticketImg,
  },
  onClickEditButton,
}: Props) {
  const handleClickEditButton = (
    e: React.SyntheticEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    e.preventDefault();

    onClickEditButton(id);
  };

  return (
    <TableRow>
      <TableCell className="flex flex-row bg-primary p-0 w-full h-[213]">
        <div className="w-[20%]">
          <Image
            priority
            quality={100}
            width={213}
            height={233}
            alt="Card Icon 01"
            src={ticketImg}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              height: "100%"
            }}
          />
        </div>
        <div className="flex flex-row w-[80%] pl-5">
          <div className="flex flex-col justify-center gap-12 w-[590]">
            <div>
              <h3 className="text-xl">{ticketName}</h3>
              <p className="inline-flex items-center">
                <CiLocationOn size={24} className="mx-2" /> {ticketLocation}
              </p>
            </div>
            <div>
              <span className="bg-accent text-xs text-primary p-3">
                {ticketGrade}
              </span>
              <span className="text-secondary-foreground text-xs">
                {" ("}
                {ticketReviews} {" Reviews)"}
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4">
            <Separator orientation="vertical" className="h-[130]" />
            <div className="flex flex-col justify-center">
              <p className="text-xs text-secondary-foreground">
                de R$ {ticketValue} por
              </p>
              <p className="relative mb-3 mt-1">
                R${" "}
                <span className="text-xl text-accent font-bold absolute top-[1px] left-[23px]">
                  {ticketDiscountValue }
                </span>
              </p>
              <Button
                className="bg-accent text-primary mt-4 hover:text-primary"
                onClick={handleClickEditButton}
                variant={"outline"}
              >
                Saiba Mais {"->"}
              </Button>
            </div>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}
