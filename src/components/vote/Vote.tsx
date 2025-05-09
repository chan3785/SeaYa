import React from "react";
import EventsNavbar from "../events/EventsNavbar";
import Footer from "../Footer";
import Headline from "./Headline";
import ProposalList from "./ProposalList";

export default function Vote() {
  return (
    <div className="main-container w-full h-auto bg-[#011829] relative overflow-hidden">
      <div className="mb-8">
        <EventsNavbar />
      </div>
      <div className="w-full pt-[3rem] pb-[4rem] px-4 sm:px-8 md:px-16 lg:px-24">
        <Headline />
        <div className="mb-6">
          <ProposalList />
        </div>
      </div>
      <Footer />
    </div>
  );
}
