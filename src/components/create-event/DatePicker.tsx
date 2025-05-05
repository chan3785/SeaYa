"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import { Calendar } from "../../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import useDate from "../../context/useDate";

export default function DatePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const { dateValue, setDateValue } = useDate();

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] h-[100px] text-left font-normal bg-transparent border-gray-400/70 flex justify-between",
              !dateValue && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="" />
            {dateValue?.from ? (
              dateValue.to ? (
                <>
                  {format(dateValue.to, "EEE, LLL dd")}
                  <br />
                  {format(dateValue.from, "EEE, LLL dd")}
                </>
              ) : (
                format(dateValue.from, "EEE, LLL dd")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateValue?.from}
            selected={dateValue}
            onSelect={setDateValue}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
