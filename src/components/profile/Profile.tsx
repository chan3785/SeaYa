import React, { useState } from "react";
import Footer from "../Footer";
import EventsNavbar from "../events/EventsNavbar";
import UserProfile from "./UserProfile";
import UserPoap from "./UserPoap";
import UserEvents from "./UserEvents";
import UserProjects from "./UserProjects";

export default function Profile() {
  return (
    <div className="main-container w-full h-auto bg-[#011829] relative overflow-hidden">
      <div className="mb-8">
        <EventsNavbar />
      </div>
      <div className="w-full pt-[3rem] pb-[4rem] px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="mb-6">
          <UserProfile />
          <UserPoap />
          <UserEvents />
          <UserProjects />
        </div>
      </div>
      <Footer />
    </div>
  );
}
