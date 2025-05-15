import React from "react";
import EventsNavbar from "../../events/EventsNavbar";
import ProposalDetail from "./ProposalDetail";
import ProposalStatus from "./ProposalStatusSection";
import Footer from "../../Footer";

export default function VoteProposal() {
  return (
    <div className="bg-white flex flex-col w-full">
      <div className="bg-white [background:linear-gradient(180deg,rgba(0,42,87,1)_0%,rgba(1,24,41,1)_100%)] w-full min-h-screen relative">
        <EventsNavbar />
      </div>

      <div>
        <div className="flex w-[680px] h-[685px] items-center gap-2.5 px-[50px] py-[41px] absolute top-[154px] left-[130px] bg-seaya-black rounded-[20px] border border-solid border-stroke-gray">
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
