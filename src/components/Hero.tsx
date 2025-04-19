import React from "react";

export default function Hero() {
  return (
    <>
      <div className="flex w-full max-w-3xl flex-col gap-3 items-start px-4 sm:px-8 md:px-16 lg:px-24 relative z-[19] mt-[9rem] mb-0">
        <span className="flex w-full h-auto justify-start items-start shrink-0 font-['Space_Grotesk'] text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-semibold leading-[1.3] text-[#1e1e1e] relative text-left z-20">
          We streamline event management within the Sui ecosystem.
        </span>
        <span className="flex w-full h-auto justify-start items-start self-stretch shrink-0 font-['Space_Grotesk'] text-[1.5rem] sm:text-[2rem] font-medium leading-[1.2] text-[#1e1e1e] relative text-left z-[21]">
          Covering all official Sui-hosted events.
        </span>
      </div>
      <div className="w-full h-[54rem] bg-[url(/c2508f90-8c32-4b98-abf9-e422642cd371.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[1]" />
    </>
  );
}
