import React from "react";

export default function LinkSection() {
  return (
    <div className="flex flex-col w-[580px] items-start gap-6 relative">
      <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
          Social Media Links
        </div>

        <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col h-[63px] items-start gap-2.5 relative self-stretch w-full bg-seaya-black rounded-[10px] border border-solid border-muted-foreground">
            <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[109px] items-center justify-center gap-2.5 px-2.5 py-5 relative bg-muted-foborder-muted-foreground rounded-[10px_0px_0px_10px]">
                <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <img
                    className="relative w-[17px] h-[17px]"
                    alt="Clip path group"
                    src={""}
                  />

                  <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-muted-foreground text-lg tracking-[0] leading-[normal]">
                    x.com/
                  </div>
                </div>
              </div>

              <div className="relative w-fit [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-muted-foreground border-muted-foreground text-lg tracking-[0] leading-[normal]">
                username
              </div>
            </div>
          </div>

          <div className="flex flex-col h-[63px] items-start gap-2.5 relative self-stretch w-full bg-seaya-black rounded-[10px] border border-solid border-muted-foreground">
            <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
              <div className="w-[155px] flex flex-col items-center justify-center gap-2.5 px-2.5 py-5 relative bg-muted-foborder-muted-foreground rounded-[10px_0px_0px_10px]">
                <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <img className="relative w-5 h-5" alt="Vector" src={""} />

                  <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-muted-foreground text-lg tracking-[0] leading-[normal]">
                    reddit.com/
                  </div>
                </div>
              </div>

              <div className="relative w-fit [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-muted-foreground border-muted-foreground text-lg tracking-[0] leading-[normal]">
                username
              </div>
            </div>
          </div>

          <div className="flex flex-col h-[63px] items-start gap-2.5 relative self-stretch w-full bg-seaya-black rounded-[10px] border border-solid border-muted-foreground">
            <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
              <div className="w-[167px] flex flex-col items-center justify-center gap-2.5 px-2.5 py-5 relative bg-muted-foborder-muted-foreground rounded-[10px_0px_0px_10px]">
                <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <img
                    className="relative w-[18px] h-[18px]"
                    alt="Vector"
                    src={""}
                  />

                  <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-muted-foreground text-lg tracking-[0] leading-[normal]">
                    linkedin.com/
                  </div>
                </div>
              </div>

              <div className="relative w-fit [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-muted-foreground border-muted-foreground text-lg tracking-[0] leading-[normal]">
                username
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[302px] items-start gap-3 relative flex-[0_0_auto]">
          <div className="relative self-stretch h-[18.95px] mt-[-1.00px] [font-family:'Space_Grotesk-SemiBold',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Email
          </div>

          <p className="relative self-stretch [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
            Add emails to receive event invites
          </p>
        </div>

        <div className="flex flex-col h-[63px] items-start gap-2.5 px-3.5 py-[19px] relative self-stretch w-full bg-seaya-black rounded-[10px] border border-solid border-muted-foreground">
          <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
            <img className="relative w-6 h-6" alt="Mage email fill" src={""} />

            <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
              user1234@gmail.com
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[184px] items-start justify-center gap-2.5 px-3.5 py-[19px] relative flex-[0_0_auto] bg-primary-color rounded-[10px]">
          <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <img className="relative w-5 h-5" alt="Dashicons cloud" src={""} />

            <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
              Save Changes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
