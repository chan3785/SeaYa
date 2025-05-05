"use client";

import * as React from "react";
import { Globe } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import useDate from "../../context/useDate";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

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
          <div className="w-[200px] items-center">
            <select
              name="timeZone"
              className="p-2 rounded bg-gray-700 text-muted-foreground w-[150px] bg-transparent"
            >
              <option value="">Select Time Zone</option>
              <option value="UTC">UTC</option>
              <option value="EST">EST</option>
            </select>
          </div>
        </div>
      </Button>
    </div>
  );
}
