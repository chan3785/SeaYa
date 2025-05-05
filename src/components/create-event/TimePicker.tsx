"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon, Clock4Icon } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import useDate from "../../context/useDate";
import { TimePicker12Demo } from "./TimePicker/time-picker-12h-demo";

export default function TimePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const { dateValue, setDateValue } = useDate();
  const [date, setDate] = React.useState<Date | undefined>();
  return (
    <div className={cn("grid gap-2", className)}>
      <Button
        id="date"
        variant={"outline"}
        className={cn(
          "w-[300px] h-[100px] text-left text-muted-foreground font-normal top-0 left-0 bg-seaya-black rounded-[10px] border border-solid border-stroke-gray justify-between hover:bg-transparent hover:text-muted-foreground",
          !dateValue && "text-muted-foreground"
        )}
      >
        <Clock4Icon width={50} height={50} />
        <div className="grid grid-cols-1 gap-2">
          <div className="text-xl flex justify-between w-[200px] items-center">
            <span className="">Start</span>
            <TimePicker12Demo date={date} setDate={setDate} />
            {/* {format(dateValue.from, "h:mm a")} */}
          </div>
          <div className="text-xl flex justify-between w-[200px] items-center">
            <span className="">End</span>
            <Button
              variant={"ghost"}
              className="text-xl text-white font-light hover:bg-transparent bg-gray-400/70 w-[140px]"
            >
              {/* {format(dateValue.to, "h:mm a")} */}
            </Button>
          </div>
        </div>
      </Button>
    </div>
  );
}
