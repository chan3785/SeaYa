import React from "react";

export default function Headline() {
  return (
    <div className="flex w-[1069.37px] items-center justify-between relative">
      <div className="flex flex-col w-[320.96px] items-center gap-6 relative">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-white text-4xl tracking-[0] leading-[normal]">
          Vote On Sui!
        </div>

        <p className="relative self-stretch [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
          The first voting platform for the Sui community
        </p>
      </div>

      <div className="relative w-[325.41px] h-[325.41px] rounded-[162.71px]">
        <div className="relative w-[247px] h-[247px] top-[39px] left-[39px] rounded-[123.35px]">
          <img
            className="absolute w-[179px] h-[179px] top-[34px] left-[34px]"
            alt="Ellipse"
            src={"public/Elipse.png"}
          />

          <img
            className="absolute w-[84px] h-[107px] top-[70px] left-[82px]"
            alt="Sui Logo"
            src={"public/suiLogo.png"}
          />
        </div>
      </div>
    </div>
  );
}
