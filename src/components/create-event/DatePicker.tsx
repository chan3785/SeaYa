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
              "w-[300px] h-[100px] text-left text-muted-foreground font-normal top-0 left-0 bg-seaya-black rounded-[10px] border border-solid border-stroke-gray justify-between hover:bg-transparent hover:text-muted-foreground",
              !dateValue && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="w-40 h-40" />
            {dateValue?.from ? (
              dateValue.to ? (
                <div className="grid grid-cols-1 gap-2">
                  <div className="text-xl flex justify-between w-[200px] items-center">
                    <span className="">Start</span>
                    <Button
                      variant={"ghost"}
                      className="text-xl text-white font-light hover:bg-transparent bg-gray-400/70 w-[140px]"
                    >
                      {format(dateValue.from, "EEE, LLL dd")}
                    </Button>
                  </div>
                  <div className="text-xl flex justify-between w-[200px] items-center">
                    <span className="">End</span>
                    <Button
                      variant={"ghost"}
                      className="text-xl text-white font-light hover:bg-transparent bg-gray-400/70 w-[140px]"
                    >
                      {format(dateValue.to, "EEE, LLL dd")}
                    </Button>
                  </div>
                </div>
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
