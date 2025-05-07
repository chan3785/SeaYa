import React from "react";

export default function UserProfile() {
  return (
    <div className="flex w-[1180px] items-start gap-[42px] relative">
      <img
        className="relative w-[112.83px] h-[112.82px] object-cover"
        alt="Whatsapp image"
        src={""}
      />

      <div className="flex flex-col w-[205px] items-start gap-4 relative">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Space_Grotesk-SemiBold',Helvetica] font-semibold text-white text-[31px] tracking-[0] leading-[normal]">
          User1234
        </div>

        <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] opacity-80">
            <img className="relative w-5 h-5" alt="Uis calendar" src={""} />

            <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
              Joined March 2025
            </div>
          </div>

          <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto] opacity-80">
            <img
              className="relative w-5 h-5"
              alt="Clarity event solid"
              src={""}
            />

            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                1 hosted
              </div>

              <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                24 Attended
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
            <div className="relative w-[17px] h-[17px] bg-[url(/clip-path-group.png)] bg-[100%_100%]" />

            <img
              className="relative w-6 h-6"
              alt="Ic baseline reddit"
              src={""}
            />

            <img className="relative w-6 h-6" alt="Mdi linkedin" src={""} />

            <img
              className="relative w-6 h-6"
              alt="Ic baseline facebook"
              src={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
