import React from "react";
import EventsNavbar from "../../events/EventsNavbar";
import ProposalDetail from "./ProposalDetail";
import ProposalStatus from "./ProposalStatusSection";
import Footer from "../../Footer";

export default function VoteProposal() {
  return (
    <div className="bg-[#011829] flex flex-col w-full">
      <div className="w-full min-h-screen relative">
        <EventsNavbar />
      </div>

      <div className="gap-14">
        <div className="flex w-[680px] h-[685px] justify-center items-center gap-2.5 px-[50px] py-[41px] absolute top-[154px] left-[130px]">
          <ProposalDetail />
        </div>

        <div className="flex flex-col w-[441px] items-start gap-10 absolute top-[216px] left-[869px]">
          <ProposalStatus />
        </div>
      </div>

      <Footer />
    </div>
  );
}
