"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function DatePicker() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left tex-xs hover:!text-white",
            !date && "text-accent"
          )}
        >
          <CalendarIcon />
          {date ? (
            <p className="text-secondary-foreground">
              {Intl.DateTimeFormat("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              }).format(date)}
            </p>
          ) : (
            <p className="text-secondary-foreground">Data do Ingresso</p>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(day) => day && setDate(day)}
          formatters={{
            formatCaption: (date) => {
              return (
                date.toLocaleString("pt-BR", {
                  month: "narrow",
                }) +
                date
                  .toLocaleString("pt-BR", {
                    month: "long",
                    year: "numeric",
                  })
                  .slice(1)
              );
            },
            formatWeekdayName: (date) => {
              return date.toLocaleString("pt-BR", {
                weekday: "narrow",
              });
            },
          }}
          initialFocus
          classNames={{
            day_selected: "bg-accent font-bold text-white",
            day_range_start: "bg-accent font-bold text-white",
            day_range_end: "bg-accent font-bold text-white",
            day: "rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-white h-8 w-8 p-0 font-[500] aria-selected:opacity-100",
            day_today: "text-sm font-semibold border-2 !p-0 rounded-full",
            day_outside:
              "rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-white h-8 w-8 p-0 font-[500] aria-selected:opacity-100",
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
