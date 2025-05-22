"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon, Clock4Icon } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { TimePicker12Demo } from "./TimePicker/time-picker-12h-demo";
import { useState } from "react";
import { useTime } from "../../context/useDate";

export default function TimePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [시작시간, set시작시간] = useState<Date | undefined>();
  const [종료시간, set종료시간] = useState<Date | undefined>();
  const { setTimeValue } = useTime();

  React.useEffect(() => {
    if (시작시간 && 종료시간) {
      setTimeValue({ from: 시작시간, to: 종료시간 });
      console.log("시작시간:", 시작시간, "종료시간:", 종료시간);
    }
  }, [시작시간, 종료시간]);

  return (
    <div className={cn("grid gap-2", className)}>
      <Button
        id="date"
        variant={"outline"}
        className={cn(
          "w-[350px] h-[100px] text-left text-muted-foreground font-normal top-0 left-0 bg-seaya-black rounded-[10px] border border-solid border-stroke-gray justify-between hover:bg-transparent hover:text-muted-foreground"
        )}
      >
        <Clock4Icon width={50} height={50} />
        <div className="grid grid-cols-1 gap-2">
          <div className="text-lg flex justify-between w-[270px] items-center">
            <span className="">Start</span>
            <TimePicker12Demo time={시작시간} setTime={set시작시간} />
          </div>
          <div className="text-lg flex justify-between w-[270px] items-center">
            <span className="">End</span>
            <TimePicker12Demo time={종료시간} setTime={set종료시간} />
          </div>
        </div>
      </Button>
    </div>
  );
}
