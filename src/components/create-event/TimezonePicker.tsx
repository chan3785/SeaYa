"use client";

import * as React from "react";
import { format } from "date-fns";
import { Globe } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import useDate from "../../context/useDate";

export default function TimeZonePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const { dateValue, setDateValue } = useDate();

  return (
    <div className={cn("grid gap-2", className)}>
      <Button
        id="timezone"
        variant={"outline"}
        className={cn(
          "w-[200px] h-[100px] text-left text-muted-foreground font-normal top-0 left-0 bg-seaya-black rounded-[10px] border border-solid border-stroke-gray justify-between hover:bg-transparent hover:text-muted-foreground",
          !dateValue && "text-muted-foreground"
        )}
      >
        <div className="grid grid-cols-1 gap-2">
          <Globe className="w-full h-full" />
          <div className="text-xl w-[200px] items-center">
            <span className="">Select Time Zone</span>
          </div>
        </div>
      </Button>
    </div>
  );
}
