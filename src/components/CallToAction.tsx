import React from "react";

export default function CallToAction() {
  return (
    <div className="w-full relative mt-[-7rem] mb-[8rem] px-4 sm:px-8 md:px-16 lg:px-24 z-[80]">
      {/* NFT卡片容器 */}
      <div className="w-full relative h-[15rem] md:h-[26rem]">
        {/* 使用提供的图片作为NFT卡片，使用绝对定位将其放在蓝色背景上方 */}
        <div className="absolute left-[6%] top-[27%] w-[51.5%] h-[30rem] z-[102] hidden md:block transition-all">
          <img
            src="/6b0bc49d-a167-443d-9152-fd20db47f500.png"
            alt="NFT Cards"
            className="w-full h-full  object-contain"
          />
        </div>
      </div>

      {/* 蓝色背景区域 */}
      <div className="w-[90%] h-[clamp(15rem,23vw,23rem)] bg-[#4da2ff] rounded-[1.25rem] relative mx-auto z-[100] -mt-[6.25rem]">
        <div className="h-full flex w-[35%] flex-col gap-[clamp(1rem,1.5vw,1.25rem)] items-start flex-nowrap relative ml-auto mr-[8%] px-[clamp(1rem,1.5vw,1.5rem)] justify-center">
          <div className="flex flex-col gap-[clamp(0.5rem,1vw,0.75rem)] items-start self-stretch shrink-0 flex-nowrap relative">
            <span className="h-auto self-stretch shrink-0 basis-auto font-['Space_Grotesk'] text-[clamp(1.5rem,3vw,3rem)] font-semibold leading-[1.2] text-[#fff] relative text-left whitespace-nowrap">
              Create your event!
            </span>
            <span className="flex w-full h-auto justify-start items-start self-stretch shrink-0 font-['Space_Grotesk'] text-[clamp(0.875rem,1.25vw,1.25rem)] font-semibold leading-[1.3] text-[#fff] relative text-left">
              Join us at the Sui Ecosystem Crypto Event to network with
              innovators and dive into the future of blockchain!
            </span>
          </div>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-[clamp(8rem,12vw,12rem)] py-[clamp(0.5rem,0.7vw,0.7rem)] px-[clamp(1rem,1.875vw,1.875rem)] gap-[0.625rem] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[3.125rem] relative mt-4 cursor-pointer transition-transform hover:scale-105 no-underline"
          >
            <span className="flex w-full justify-center items-start shrink-0 basis-auto font-['Space_Grotesk'] text-[clamp(1rem,1.5vw,1.5rem)] font-semibold leading-[1.3] text-[#0079ff] relative text-center whitespace-nowrap">
              Get Started
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
