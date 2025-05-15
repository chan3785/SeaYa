import React from "react";

export default function ProposalDetail() {
  return (
    <div className="flex w-[680px] h-[684.75px] items-center gap-2.5 px-[50px] py-[41px] relative bg-seaya-black rounded-[20px] border border-solid border-stroke-gray">
      <div className="flex flex-col w-[579.11px] items-start gap-8 relative mt-[-0.31px] mb-[-0.31px]">
        <div className="inline-flex items-center justify-center gap-2.5 px-5 py-[5px] relative flex-[0_0_auto] bg-stroke-gray rounded-[20px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
            Proposal
          </div>
        </div>

        <div className="flex h-[227.31px] items-center justify-center gap-2.5 px-[232px] py-[74px] relative self-stretch w-full rounded-[20px] [background:linear-gradient(136deg,rgba(75,255,166,1)_0%,rgba(255,121,75,1)_54%,rgba(217,98,255,1)_100%)]">
          <div className="relative w-fit ml-[-23.95px] mr-[-23.95px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-[#00de85] text-[38px] tracking-[0] leading-[normal]">
            IMG/MP4
          </div>
        </div>

        <p className="relative self-stretch h-[22px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
          Round #2 of LFG Voting
        </p>

        <p className="relative self-stretch h-[152.06px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
          Vote on the next set of candidates for the LFG Launchpad. The project
          with the most votes will launch on LFG sometime in the next few
          months, with the flexibility to decide their launch
          date.&nbsp;&nbsp;It’s key that you vote for the best projects to be
          launched on Jupiter, as the DAO will receive 0.75% of their token
          supply.&nbsp;&nbsp;Make sure to read through all of the information
          about each project on the forum post before making your final
          decision.&nbsp;&nbsp;Rewards are based on your voting activity and
          scale linearly, no matter who you vote for. But remember, you can only
          vote for 1 candidate.
        </p>

        <div className="flex flex-col w-[194px] items-start gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-[20px] border border-solid border-white">
          <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
              View Full Proposal
            </div>

            <img
              className="relative w-6 h-6"
              alt="Lucide chevron down"
              src={"lucideChevronDown"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
