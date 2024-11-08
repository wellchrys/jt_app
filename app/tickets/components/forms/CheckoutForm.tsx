import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/app/date-picker/components";
import { Ticket } from "../../models/ticket";

type Props = {
  ticket: Ticket | undefined;
};

export default function CheckouForm({ ticket }: Props) {
  return (
    <Card className="w-[350px] p-6">
      <CardContent className="p-0">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Data do ingresso</Label>
              <DatePicker />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Ingressos</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Selecionar ingressos" />
                </SelectTrigger>
                <SelectContent position="item-aligned">
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex justify-between">
                <span className="text-lg">Valor total</span>
                <span className="text-lg text-accent">
                  R$ {ticket?.ticketDiscountValue}
                </span>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between py-6 px-0">
        <Button variant="default" className="bg-accent hover:bg-accent w-full">
          Comprar Ingresso
        </Button>
      </CardFooter>
    </Card>
  );
}
