import React from "react";

export default function ProfileSection() {
  return (
    <div className="flex flex-col items-start gap-[21px] relative w-full">
      <div className="flex flex-col w-full items-start gap-3 relative flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Space_Grotesk-SemiBold',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal]">
          Profile
        </div>

        <p className="relative self-stretch [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
          Choose how you are displayed as a host or guest.
        </p>
      </div>

      <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[122px] items-start gap-3 relative flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
            Profile Picture
          </div>

          <div className="relative w-[115.1px] h-[115.1px] bg-[url(/whatsapp-image-2024-11-19-at-21-30-38-6193b270-1.png)] bg-cover bg-[50%_50%]">
            <div className="flex w-6 h-6 items-center justify-center gap-2.5 p-[5px] relative top-[91px] left-[91px] bg-seaya-black rounded-[14.76px] border border-solid border-secondary-color">
              <img
                className="relative w-5 h-5 mt-[-3.00px] mb-[-3.00px] ml-[-3.00px] mr-[-3.00px]"
                alt="Material symbols"
                src={""}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col h-[63px] items-start gap-2.5 px-3.5 py-[19px] relative self-stretch w-full bg-seaya-black rounded-[10px] border border-solid border-muted-foreground">
          <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
            <img className="relative w-[18px] h-[18px]" alt="Vector" src={""} />

            <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-muted-foreground text-lg tracking-[0] leading-[normal]">
              Name
            </div>
          </div>
        </div>

        <div className="flex flex-col h-[63px] items-start gap-2.5 px-3.5 py-[19px] relative self-stretch w-full bg-seaya-black rounded-[10px] border border-solid border-muted-foreground">
          <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-SemiBold',Helvetica] font-semibold text-muted-foreground text-lg tracking-[0] leading-[normal]">
              @
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-muted-foreground text-lg tracking-[0] leading-[normal]">
              User Name
            </div>
          </div>
        </div>

        <div className="flex flex-col h-[107px] items-start gap-2.5 px-3.5 py-[19px] relative self-stretch w-full bg-seaya-black rounded-[10px] border border-solid border-muted-foreground">
          <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
            <div className="relative w-6 h-6">
              <img
                className="absolute w-4 h-[22px] top-0.5 left-1"
                alt="Group"
                src={""}
              />
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-muted-foreground text-lg tracking-[0] leading-[normal]">
              Bio
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
