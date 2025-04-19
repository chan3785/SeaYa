import React from "react";

export default function Footer() {
  // 处理点击SeaYa!的函数，滚动到页面顶部
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex w-full pt-16 pb-16 px-4 sm:px-8 md:px-16 lg:px-24 flex-col gap-[10px] items-start flex-nowrap bg-[#1e1e1e] relative z-[35] mb-0">
      <div className="flex w-full flex-col gap-[3rem] items-start shrink-0 flex-nowrap relative z-[36]">
        <div className="flex w-full flex-col md:flex-row justify-between items-start shrink-0 flex-nowrap relative z-[37]">
          <button
            onClick={handleScrollToTop}
            className="h-[4.5rem] shrink-0 basis-auto font-['Space_Grotesk'] text-[4rem] font-semibold leading-[1.2] text-[#fff] relative text-left whitespace-nowrap z-[38] mb-8 md:mb-0 bg-transparent border-none cursor-pointer"
          >
            SeaYa!
          </button>
          <div className="flex w-full md:w-auto flex-col md:flex-row gap-6 md:gap-12 items-start shrink-0 flex-nowrap relative z-[39]">
            <div className="flex w-full md:w-auto flex-col items-start shrink-0 flex-nowrap relative z-40">
              <div className="flex w-full py-2 px-0 gap-2 justify-start items-center shrink-0 flex-nowrap relative z-[41]">
                <button className="flex w-auto h-[1.25rem] justify-center items-start shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-semibold leading-[1.25rem] text-[#fff] relative text-left md:text-center whitespace-nowrap z-[42] bg-transparent border-none cursor-pointer">
                  Learn
                </button>
              </div>
              <div className="flex py-2 px-0 gap-2 justify-start items-center self-stretch shrink-0 flex-nowrap relative z-[43]">
                <button className="flex w-auto h-[1.25rem] justify-start items-start shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-normal leading-[1.25rem] text-[#fff] relative text-left md:text-center whitespace-nowrap z-[44] bg-transparent border-none cursor-pointer">
                  Introduction to SY
                </button>
              </div>
              <div className="flex py-2 px-0 gap-2 justify-start items-center shrink-0 flex-nowrap relative z-[45]">
                <button className="flex w-auto h-[1.25rem] justify-start items-start shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-normal leading-[1.25rem] text-[#fff] relative text-left md:text-center whitespace-nowrap z-[46] bg-transparent border-none cursor-pointer">
                  Use Case
                </button>
              </div>
              <div className="flex py-2 px-0 gap-2 justify-start items-center shrink-0 flex-nowrap relative z-[47]">
                <button className="flex w-auto h-[1.25rem] justify-start items-start shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-normal leading-[1.25rem] text-[#fff] relative text-left md:text-center whitespace-nowrap z-[48] bg-transparent border-none cursor-pointer">
                  Research
                </button>
              </div>
              <div className="flex py-2 px-0 gap-2 justify-start items-center shrink-0 flex-nowrap relative z-[49]">
                <button className="flex w-auto h-[1.25rem] justify-start items-start shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-normal leading-[1.25rem] text-[#fff] relative text-left md:text-center whitespace-nowrap z-50 bg-transparent border-none cursor-pointer">
                  About seeYa
                </button>
              </div>
              <div className="flex py-2 px-0 gap-2 justify-start items-center shrink-0 flex-nowrap relative z-[50]">
                <button className="flex w-auto h-[1.25rem] justify-start items-start shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-normal leading-[1.25rem] text-[#fff] relative text-left md:text-center whitespace-nowrap z-[51] bg-transparent border-none cursor-pointer">
                  The team
                </button>
              </div>
            </div>
            <div className="flex w-full md:w-auto flex-col items-start shrink-0 flex-nowrap relative z-[51]">
              <div className="flex py-2 px-0 gap-2 justify-start items-center shrink-0 flex-nowrap relative z-[52]">
                <button className="flex w-auto h-[1.25rem] justify-start items-start shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-semibold leading-[1.25rem] text-[#fff] relative text-left md:text-center whitespace-nowrap z-[53] bg-transparent border-none cursor-pointer">
                  Tools
                </button>
              </div>
              <div className="flex py-2 px-0 gap-2 justify-start items-center shrink-0 flex-nowrap relative z-[54]">
                <button className="flex w-auto h-[1.25rem] justify-start items-start shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-normal leading-[1.25rem] text-[#fff] relative text-left md:text-center whitespace-nowrap z-[55] bg-transparent border-none cursor-pointer">
                  Use of APIs
                </button>
              </div>
              <div className="flex py-2 px-0 gap-2 justify-start items-center shrink-0 flex-nowrap relative z-[56]">
                <button className="flex w-auto h-[1.25rem] justify-start items-start shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-normal leading-[1.25rem] text-[#fff] relative text-left md:text-center whitespace-nowrap z-[57] bg-transparent border-none cursor-pointer">
                  Litepaper
                </button>
              </div>
              <div className="flex py-2 px-0 gap-2 justify-start items-center self-stretch shrink-0 flex-nowrap relative z-[58]">
                <a
                  href="https://github.com/Banksy-w/SeaYa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-auto h-[1.25rem] justify-start items-start shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-normal leading-[1.25rem] text-[#fff] relative text-left md:text-center whitespace-nowrap z-[59] no-underline cursor-pointer hover:underline"
                >
                  Github Repository
                </a>
              </div>
            </div>
            <div className="flex w-full md:w-auto flex-col items-start shrink-0 flex-nowrap relative z-[60]">
              <div className="flex py-2 px-0 gap-2 justify-start items-center shrink-0 flex-nowrap relative z-[61]">
                <button className="flex w-auto h-[1.25rem] justify-start items-start shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-bold leading-[1.25rem] text-[#fff] relative text-left md:text-center whitespace-nowrap z-[62] bg-transparent border-none cursor-pointer">
                  Build
                </button>
              </div>
              <div className="flex py-2 px-0 gap-2 justify-start items-center shrink-0 flex-nowrap relative z-[63]">
                <button className="flex w-auto h-[1.25rem] justify-start items-start shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-normal leading-[1.25rem] text-[#fff] relative text-left md:text-center whitespace-nowrap z-[64] bg-transparent border-none cursor-pointer">
                  Event
                </button>
              </div>
              <div className="flex py-2 px-0 gap-2 justify-start items-center self-stretch shrink-0 flex-nowrap relative z-[65]">
                <button className="flex w-auto h-[1.25rem] justify-start items-start shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-normal leading-[1.25rem] text-[#fff] relative text-left md:text-center whitespace-nowrap z-[66] bg-transparent border-none cursor-pointer">
                  Development
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[0.5px] self-stretch shrink-0 bg-[url(/2d92b8fc-6eff-4a87-a370-b6451fe6da92.svg)] bg-cover bg-no-repeat relative z-[67]" />
        <div className="h-[1px] w-full bg-[#c7c7c7] my-4 z-[80]"></div>
        <div className="flex flex-col md:flex-row justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[68]">
          <div className="flex w-full md:w-auto gap-6 items-center justify-center md:justify-start shrink-0 flex-nowrap relative z-[69] mb-4 md:mb-0">
            <button className="flex w-[2rem] py-1 px-1 gap-1 items-center shrink-0 flex-nowrap relative z-[70] bg-transparent border-none cursor-pointer">
              <div className="w-[0.7rem] h-[1.35rem] shrink-0 bg-[url(/459b3f55-559a-425d-9e1f-45c20911830c.svg)] bg-cover bg-no-repeat relative z-[71]" />
            </button>
            <button className="flex w-[2rem] py-1 px-1 gap-1 items-center shrink-0 flex-nowrap relative z-[72] bg-transparent border-none cursor-pointer">
              <div className="w-[1.25rem] h-[1.25rem] shrink-0 bg-[url(/e6a1c540-83d8-43ea-bf9d-cf45077b9982.svg)] bg-cover bg-no-repeat relative z-[73]" />
            </button>
            <button className="flex w-[2rem] py-1 px-1 flex-col gap-1 items-start shrink-0 flex-nowrap relative z-[74] bg-transparent border-none cursor-pointer">
              <div className="w-[1.4rem] h-[1.1rem] shrink-0 bg-[url(/62e35c57-f138-4741-bb26-981c32572767.svg)] bg-cover bg-no-repeat relative z-[75]" />
            </button>
            <button className="flex w-[2rem] py-1 px-1 flex-col gap-1 items-start shrink-0 flex-nowrap relative z-[76] bg-transparent border-none cursor-pointer">
              <div className="flex h-[1.1rem] py-1 px-1 justify-between items-center self-stretch shrink-0 flex-nowrap bg-[url(/151ed22e-71aa-4f41-b918-3ad9b33b1c62.png)] bg-cover bg-no-repeat relative z-[77]" />
            </button>
          </div>
          <div className="h-[1px] w-full bg-[#333333] my-4 md:hidden z-[80]"></div>
          <span className="flex w-full md:w-auto h-[1.25rem] justify-center items-start shrink-0 basis-auto font-['Space_Grotesk'] text-[0.9rem] font-normal leading-[1.25rem] text-[#fff] relative text-center whitespace-nowrap z-[78]">
            ©2025 Copyright SeaYa. All rights reserved
          </span>
        </div>
      </div>
    </div>
  );
}
