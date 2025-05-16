import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProposalList() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-[1180px] items-start gap-6 relative">
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
          Proposals
        </div>

        <div className="flex flex-col w-[356.1px] h-[50px] items-start justify-center gap-2.5 px-[23px] py-[15px] relative bg-seaya-black rounded-[10px] border border-solid border-muted-foreground">
          <div className="inline-flex items-start gap-6 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px]">
            <img
              className="relative w-6 h-6"
              alt="Iconamoon search"
              src="https://c.animaapp.com/ign7977j/img/iconamoon-search-light.svg"
            />

            <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-normal text-muted-foreground text-lg tracking-[0] leading-[normal]">
              Search proposal
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-[362.56px] items-center gap-2.5 px-0 py-px relative self-stretch w-full bg-seaya-black rounded-[20px] border border-solid border-muted-foreground">
        <div className="flex flex-col w-[1180px] items-start relative flex-[0_0_auto]">
          <div className="flex flex-col w-[1178px] h-[71px] items-start gap-2.5 px-10 py-[23px] relative rounded-[20px_20px_0px_0px] border-b-2 [border-bottom-style:solid] border-muted-foreground">
            <div className="relative w-[1045.05px] h-[23px]">
              <div className="absolute top-0 left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal]">
                Title
              </div>

              <div className="absolute top-0 left-[402px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-lg text-center tracking-[0] leading-[normal]">
                Voted
              </div>

              <div className="absolute top-0 left-[582px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal]">
                Status
              </div>

              <div className="absolute top-0 left-[782px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal]">
                Start
              </div>

              <div className="absolute top-0 left-[1002px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal]">
                End
              </div>
            </div>
          </div>

          <div
            className="flex flex-col h-[113.24px] items-start gap-2.5 px-10 py-[38px] relative self-stretch w-full border-b [border-bottom-style:solid] border-muted-foreground"
            onClick={() => navigate(`/proposal/Round #2 LFG Voting`)}
          >
            <div className="relative w-[1107.05px] h-[38px] mb-[-0.76px] mr-[-7.05px]">
              <div className="absolute w-[92px] top-2 left-[382px] [font-family:'Space_Grotesk',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
                -
              </div>

              <div className="inline-flex items-center justify-center gap-2.5 px-5 py-[5px] absolute top-1 left-[582px] rounded-[20px] border border-solid border-blue-500">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-normal text-blue-500 text-base tracking-[0] leading-[normal]">
                  Active
                </div>
              </div>

              <p className="absolute top-0 left-[782px] [font-family:'Space_Grotesk',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-white text-base tracking-[0]">
                  Mar 12, 2025
                  <br />
                </span>

                <span className="text-sm">10:00 AM</span>
              </p>

              <p className="absolute top-0 left-[1002px] [font-family:'Space_Grotesk',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-white text-base tracking-[0]">
                  Mar 18, 2025
                  <br />
                </span>

                <span className="text-sm">10:00 PM</span>
              </p>

              <div className="absolute w-[382px] top-[5px] left-0 [font-family:'Space_Grotesk',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                Round #2 LFG Voting
              </div>
            </div>
          </div>

          <div className="flex flex-col h-[113.24px] items-start gap-2.5 px-10 py-[38px] relative self-stretch w-full border-b [border-bottom-style:solid] border-muted-foreground">
            <div className="relative w-[1108.05px] h-[38px] mb-[-0.76px] mr-[-8.05px]">
              <div className="absolute w-6 h-6 top-[7px] left-[419px]">
                <img
                  className="absolute w-[22px] h-[22px] top-px left-px"
                  alt="Mask group"
                  src="https://c.animaapp.com/ign7977j/img/mask-group@2x.png"
                />
              </div>

              <div className="inline-flex items-center justify-center gap-2.5 px-5 py-[5px] absolute top-1 left-[582px] rounded-[20px] border border-solid border-[#00de85]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-normal text-[#00de85] text-base tracking-[0] leading-[normal]">
                  Completed
                </div>
              </div>

              <p className="absolute top-0 left-[782px] [font-family:'Space_Grotesk',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-white text-base tracking-[0]">
                  Dec 12, 2024
                  <br />
                </span>

                <span className="text-sm">12:00 AM</span>
              </p>

              <p className="absolute top-0 left-[1002px] [font-family:'Space_Grotesk',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-white text-base tracking-[0]">
                  Dec 24, 2024
                  <br />
                </span>

                <span className="text-sm">10:40 PM</span>
              </p>

              <div className="absolute w-[382px] top-[5px] left-0 [font-family:'Space_Grotesk',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                Round #1 LFG Voting
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
