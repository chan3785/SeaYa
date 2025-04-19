import React, { useState } from "react";
import { Box } from "@radix-ui/themes";
import CustomConnectButton from "./CustomConnectButton";

export default function Navbar() {
  const [toolsOpen, setToolsOpen] = useState(false);

  const toggleTools = () => {
    setToolsOpen(!toolsOpen);
  };

  return (
    <div className="flex w-full px-4 sm:px-8 md:px-16 lg:px-24 justify-between items-center relative z-[3] mt-[3.3rem] mb-0">
      <a
        href="/"
        className="h-[31px] font-['Space_Grotesk'] text-[1.5rem] font-bold leading-[1.9rem] text-[#000] relative text-left whitespace-nowrap z-[4] cursor-pointer"
      >
        SeaYa
      </a>
      <div className="flex gap-6 items-center shrink-0 flex-nowrap relative z-[5]">
        <a
          href="https://www.google.com"
          className="flex py-[0.625rem] px-[1.25rem] gap-[0.625rem] justify-center items-center shrink-0 flex-nowrap relative z-[6] cursor-pointer"
        >
          <span className="h-[1.25rem] shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-normal leading-[1.25rem] text-[#000] relative text-left whitespace-nowrap z-[7]">
            Learn
          </span>
        </a>
        <a
          href="https://www.google.com"
          className="flex py-[0.625rem] px-[1.25rem] gap-[0.625rem] justify-center items-center shrink-0 flex-nowrap relative z-[8] cursor-pointer"
        >
          <span className="h-[1.25rem] shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-normal leading-[1.25rem] text-[#000] relative text-left whitespace-nowrap z-[9]">
            Build
          </span>
        </a>
        <div className="flex py-[0.625rem] px-[1.25rem] flex-col gap-[0.625rem] items-start shrink-0 flex-nowrap relative z-10">
          <button
            onClick={toggleTools}
            className="flex gap-2 items-center self-stretch shrink-0 flex-nowrap relative z-[11] cursor-pointer border-none bg-transparent"
          >
            <span className="h-[1.25rem] shrink-0 basis-auto font-['Space_Grotesk'] text-[1rem] font-normal leading-[1.25rem] text-[#000] relative text-left whitespace-nowrap z-[12]">
              Tools
            </span>
            <div
              className={`w-[1rem] h-[1rem] shrink-0 bg-[url(/c2b82780-611a-4ece-b11b-848d148cf4e5.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[13] transition-transform ${toolsOpen ? "rotate-180" : ""}`}
            />
          </button>

          {toolsOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 z-[100] min-w-[150px]">
              <a
                href="https://www.google.com"
                className="block px-4 py-2 hover:bg-gray-100 text-[#000] font-['Space_Grotesk'] text-[1rem]"
              >
                Tool 1
              </a>
              <a
                href="https://www.google.com"
                className="block px-4 py-2 hover:bg-gray-100 text-[#000] font-['Space_Grotesk'] text-[1rem]"
              >
                Tool 2
              </a>
              <a
                href="https://www.google.com"
                className="block px-4 py-2 hover:bg-gray-100 text-[#000] font-['Space_Grotesk'] text-[1rem]"
              >
                Tool 3
              </a>
              <a
                href="https://www.google.com"
                className="block px-4 py-2 hover:bg-gray-100 text-[#000] font-['Space_Grotesk'] text-[1rem]"
              >
                Tool 4
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-6 items-center shrink-0 flex-nowrap relative z-[14]">
        <a
          href="/events"
          className="flex py-[0.625rem] px-[3.0rem] gap-[0.625rem] justify-center items-center shrink-0 flex-nowrap rounded-[3.125rem] border-solid border border-[#1e1e1e] relative z-[15] cursor-pointer"
        >
          <span className="h-[1.25rem] shrink-0 basis-auto font-['Space_Grotesk'] text-[1.25rem] font-normal leading-[1.25rem] text-[#1e1e1e] relative text-left whitespace-nowrap z-[16]">
            Events
          </span>
        </a>
        <CustomConnectButton />
      </div>
    </div>
  );
}
