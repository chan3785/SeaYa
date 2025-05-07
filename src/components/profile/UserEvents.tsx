import React from "react";

export default function UserEvents() {
  return (
    <div className="flex flex-col w-full items-start gap-2.5 p-2.5 relative">
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative self-stretch h-[30px] mt-[-1.00px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[normal]">
          Hosted Events
        </div>

        <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="relative w-[131.79px] h-[131.79px] object-cover"
            alt="Img"
            src={""}
          />

          <div className="flex flex-col w-[309px] items-start gap-3 relative mr-[-9.79px]">
            <div className="flex flex-col items-start gap-[25px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[276.48px] h-[30px] mt-[-1.00px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[normal]">
                Getting Started with AI
              </div>

              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <img
                  className="relative w-5 h-5 object-cover"
                  alt="Whatsapp image"
                  src={""}
                />

                <div className="relative w-fit [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                  Hosted by User1234
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto] opacity-50">
              <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-5 h-5 items-center gap-2.5 p-1 relative rounded-[5px] border border-solid border-white">
                  <img
                    className="relative w-3 h-3"
                    alt="Fluent calendar"
                    src={""}
                  />
                </div>

                <p className="relative w-fit [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                  Mar12, 2024 01:30 - 02:00 PM WAT
                </p>
              </div>

              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <div className="flex w-5 h-5 items-center gap-2.5 p-1 relative rounded-[5px] border border-solid border-white">
                  <img
                    className="relative w-3 h-3"
                    alt="Fluent location"
                    src={""}
                  />
                </div>

                <div className="relative w-fit [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                  Country home, Africa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
