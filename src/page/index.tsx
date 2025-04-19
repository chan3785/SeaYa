import React from "react";
import "./index.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GettingStarted from "../components/GettingStarted";
import LatestEvents from "../components/LatestEvents";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Main() {
  return (
    <div className="main-container w-full h-auto bg-[#fff] relative overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <GettingStarted />
        <LatestEvents />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}
