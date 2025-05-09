import React from "react";
import EventsNavbar from "../events/EventsNavbar";
import Footer from "../Footer";
import TabLine from "./TabLine";
import ProfileSection from "./ProfileSection";
import LinkSection from "./LinkSection";
import AccountSection from "./AccountSection";

export default function Settings() {
  return (
    <div className="main-container w-full h-auto bg-[#011829] relative overflow-hidden">
      <div>
        <EventsNavbar />
      </div>
      <section className="w-full pt-[3rem] pb-[4rem] px-4 sm:px-8 md:px-16 lg:px-24 min-h-screen">
        <div className="text-white text-3xl mb-6 font-bold">
          <p>Settings</p>
        </div>
        <TabLine />
        <div className="my-6 flex justify-between">
          <div className="flex-col gap-4 w-[580px]">
            <ProfileSection />
            <AccountSection />
          </div>
          <LinkSection />
        </div>
      </section>
      <Footer />
    </div>
  );
}
