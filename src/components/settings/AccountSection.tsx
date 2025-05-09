import React from "react";

export default function AccountSection() {
  return (
    <div className="flex flex-col items-start gap-3 relative mt-8 w-full">
      <div className="relative self-stretch mt-[-1.00px] [font-family:'Space_Grotesk-SemiBold',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal]">
        Delete Account
      </div>

      <p className="relative self-stretch [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
        If you no longer wish to use seaYa, you can permanently delete your
        account.
      </p>

      <div className="flex-col w-[233px] justify-center gap-2.5 px-3.5 py-[19px] bg-[#ff2727] rounded-[10px] flex items-center relative flex-[0_0_auto]">
        <div className="gap-3 self-stretch w-full flex items-center relative flex-[0_0_auto]">
          <img className="relative w-6 h-6" alt="Ic baseline delete" src={""} />

          <div className="relative w-fit mt-[-0.50px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
            Delete My Account
          </div>
        </div>
      </div>
    </div>
  );
}
