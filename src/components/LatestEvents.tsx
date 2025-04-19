import React from "react";

export default function LatestEvents() {
  return (
    <div className="w-full bg-[#011829] relative z-[3] pt-[4rem] pb-[4rem]">
      {/* 标题和导航按钮 */}
      <div className="flex w-full flex-col md:flex-row justify-between items-center relative z-[83] px-4 sm:px-8 md:px-16 lg:px-24 mb-[2rem]">
        <span className="flex w-full md:w-[60%] h-auto justify-start items-start shrink-0 font-['Space_Grotesk'] text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-semibold leading-[1.3] text-[#fff] relative text-left z-[79]">
          Catch up on the latest event.
        </span>
        <div className="flex w-auto gap-4 items-center justify-end mt-4 md:mt-0">
          <button className="w-[3rem] h-[3rem] flex items-center justify-center bg-[#4da2ff] rounded-full rotate-45 z-[81]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-[-45deg]"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="w-[3rem] h-[3rem] flex items-center justify-center border border-white rounded-full rotate-[-45deg] z-[83]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-[45deg]"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 事件卡片 */}
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-6 relative z-[88] px-4 sm:px-8 md:px-16 lg:px-24 mb-0">
        <div className="w-full md:w-[32%] h-auto aspect-[0.9] bg-[url(/9a0bf28d-0a5d-4c3b-b4c3-342e353fb3f0.png)] bg-cover bg-no-repeat rounded-[1.25rem] relative z-[86]">
          <div className="w-[1.5rem] h-[1.5rem] bg-[url(/57e2b65f-1c2f-42b2-90cd-f466a8d2db8f.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[104] mt-[1.5rem] ml-[calc(100%-2rem)]" />
          <div className="w-full h-[7rem] bg-[rgba(0,0,0,0.47)] rounded-tl-none rounded-tr-none rounded-br-[1.25rem] rounded-bl-[1.25rem] absolute bottom-0 z-[89]">
            <div className="flex w-[90%] flex-col gap-2 items-start flex-nowrap relative z-[92] mt-2 mx-auto">
              <span className="h-auto self-stretch shrink-0 basis-auto font-['Space_Grotesk'] text-[2rem] font-semibold leading-[1.3] text-[#fff] relative text-left whitespace-nowrap z-[93]">
                Hackathon
              </span>
              <div className="flex gap-[0.5rem] items-start self-stretch shrink-0 flex-nowrap relative z-[94]">
                <span className="flex w-full h-auto justify-start items-start shrink-0 font-['Space_Grotesk'] text-[0.9rem] font-normal leading-[1.2] text-[#fff] relative text-left z-[95]">
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[32%] h-auto aspect-[0.9] bg-[url(/64746eba-0879-4bec-9b32-992e2e91d651.png)] bg-cover bg-no-repeat rounded-[1.25rem] relative z-[87]">
          <div className="w-[1.5rem] h-[1.5rem] bg-[url(/17727be2-58b0-463f-90be-f9fb04c08102.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[105] mt-[1.5rem] ml-[calc(100%-2rem)]" />
          <div className="w-full h-[7rem] bg-[rgba(0,0,0,0.47)] rounded-tl-none rounded-tr-none rounded-br-[1.25rem] rounded-bl-[1.25rem] absolute bottom-0 z-[90]">
            <div className="flex w-[90%] flex-col gap-2 items-start flex-nowrap relative z-[96] mt-2 mx-auto">
              <span className="h-auto self-stretch shrink-0 basis-auto font-['Space_Grotesk'] text-[2rem] font-semibold leading-[1.3] text-[#fff] relative text-left whitespace-nowrap z-[97]">
                Conference
              </span>
              <div className="flex gap-[0.5rem] items-start self-stretch shrink-0 flex-nowrap relative z-[98]">
                <span className="flex w-full h-auto justify-start items-start shrink-0 font-['Space_Grotesk'] text-[0.9rem] font-normal leading-[1.2] text-[#fff] relative text-left z-[99]">
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[32%] h-auto aspect-[0.9] bg-[url(/16ca4c39-3279-4ef9-91bd-c44f02891123.png)] bg-cover bg-no-repeat rounded-[1.25rem] relative z-[88]">
          <div className="w-[1.5rem] h-[1.5rem] bg-[url(/6defa1ec-f5ee-4fbb-b290-5c88edf4bbe2.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[106] mt-[1.5rem] ml-[calc(100%-2rem)]" />
          <div className="w-full h-[7rem] bg-[rgba(0,0,0,0.47)] rounded-tl-none rounded-tr-none rounded-br-[1.25rem] rounded-bl-[1.25rem] absolute bottom-0 z-[91]">
            <div className="flex w-[90%] flex-col gap-2 items-start flex-nowrap relative z-[100] mt-2 mx-auto">
              <span className="h-auto self-stretch shrink-0 basis-auto font-['Space_Grotesk'] text-[2rem] font-semibold leading-[1.3] text-[#fff] relative text-left whitespace-nowrap z-[101]">
                Webinar
              </span>
              <div className="flex gap-[0.5rem] items-start self-stretch shrink-0 flex-nowrap relative z-[102]">
                <span className="flex w-full h-auto justify-start items-start shrink-0 font-['Space_Grotesk'] text-[0.9rem] font-normal leading-[1.2] text-[#fff] relative text-left z-[103]">
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
