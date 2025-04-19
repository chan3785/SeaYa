import React, { useState } from "react";
import Footer from "../Footer";
import EventsNavbar from "./EventsNavbar";
import EventCard from "./EventCard";
import EventDetail from "./EventDetail";
import { upcomingEvents, pastEvents, EventType } from "./eventData";

export default function Events() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past" | "ai">(
    "past"
  );
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  return (
    <div className="main-container w-full h-auto bg-[#011829] relative overflow-hidden">
      <div className="mb-8">
        {" "}
        {/* Added margin to move navbar down */}
        <EventsNavbar />
      </div>
      <div className="w-full pt-[3rem] pb-[4rem] px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-semibold text-white font-['Space_Grotesk']">
            Events
          </h1>

          {/* Filter buttons */}
          <div className="flex bg-[#0a2539] rounded-full p-[0.25rem]">
            <button
              className={`py-[0.5rem] px-[1rem] rounded-full text-[0.875rem] font-medium transition-colors ${activeTab === "past" ? "bg-white text-[#011829]" : "text-white"}`}
              onClick={() => setActiveTab("past")}
            >
              Past
            </button>
            <button
              className={`py-[0.5rem] px-[1rem] rounded-full text-[0.875rem] font-medium transition-colors ${activeTab === "upcoming" ? "bg-white text-[#011829]" : "text-white"}`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming
            </button>
            <button
              className={`py-[0.5rem] px-[1rem] rounded-full text-[0.875rem] font-medium transition-colors ${activeTab === "ai" ? "bg-white text-[#011829]" : "text-white"}`}
              onClick={() => setActiveTab("ai")}
            >
              AI Recommended
            </button>
          </div>
        </div>

        {/* Event Cards - Two columns, three rows layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeTab === "upcoming" ? (
            upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  host={event.host}
                  imageUrl={event.imageUrl}
                  onClick={() => setSelectedEvent(event)}
                />
              ))
            ) : (
              <p className="text-white text-lg">
                No upcoming events at the moment. Check back soon!
              </p>
            )
          ) : activeTab === "past" ? (
            pastEvents.length > 0 ? (
              pastEvents.map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  host={event.host}
                  imageUrl={event.imageUrl}
                  onClick={() => setSelectedEvent(event)}
                />
              ))
            ) : (
              <p className="text-white text-lg">No past events to display.</p>
            )
          ) : // AI Recommended events - for now showing upcoming events
          upcomingEvents.length > 0 ? (
            upcomingEvents
              .slice(0, 4)
              .map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  host={event.host}
                  imageUrl={event.imageUrl}
                  onClick={() => setSelectedEvent(event)}
                />
              ))
          ) : (
            <p className="text-white text-lg">
              No recommended events at the moment.
            </p>
          )}
        </div>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <EventDetail
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
