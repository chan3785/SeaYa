import React from "react";

export default function UserPoap() {
  return (
    <div className="flex flex-col w-full items-start gap-6 p-2.5 relative">
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative self-stretch h-[30px] mt-[-1.00px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[normal]">
          POAP NFTs
        </div>
      </div>

      <div className="relative w-[153px] h-[154px] bg-[url(/clip-path-group.png)] bg-[100%_100%]">
        <div className="relative h-[154px] bg-[url(/vector.svg)] bg-[100%_100%]">
          <img
            className="absolute w-[43px] h-[7px] top-[140px] left-[101px]"
            alt="Vector"
            src={""}
          />

          <img
            className="absolute w-[68px] h-[30px] top-[17px] left-4"
            alt="Vector"
            src={""}
          />
        </div>
      </div>
    </div>
  );
}
