import React from "react";

export default function TabLine() {
  return (
    <div className="flex flex-col w-[1180px] items-start relative">
      <div className="gap-6 inline-flex items-center relative flex-[0_0_auto]">
        <div className="justify-center gap-2.5 p-2.5 border-b-2 [border-bottom-style:solid] border-white inline-flex items-center relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-2.00px] [font-family:'Space_Grotesk-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal]">
            Account
          </div>
        </div>

        <div className="justify-center gap-2.5 p-2.5 inline-flex items-center relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-2.00px] [font-family:'Space_Grotesk-SemiBold',Helvetica] font-semibold text-muted-foreground text-base tracking-[0] leading-[normal]">
            Payment
          </div>
        </div>

        <div className="justify-center gap-2.5 p-2.5 inline-flex items-center relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-2.00px] [font-family:'Space_Grotesk-SemiBold',Helvetica] font-semibold text-muted-foreground text-base tracking-[0] leading-[normal]">
            Others
          </div>
        </div>
      </div>

      <img
        className="relative self-stretch w-full h-px mb-[-0.50px]"
        alt="Line"
        src={""}
      />
    </div>
  );
}
