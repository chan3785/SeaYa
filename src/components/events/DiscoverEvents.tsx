import React, { useState } from "react";
import Footer from "../Footer";
import EventsNavbar from "./EventsNavbar";
import EventCard from "./EventCard";
import EventDetail from "./EventDetail";
import { events, EventType } from "./eventData";

export default function DiscoverEvents() {
  const [activeTab, setActiveTab] = useState<
    "all" | "hackathon" | "conference" | "meetups" | "others"
  >("all");
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  // Filter events based on active tab (this is a placeholder logic, you might want to implement actual filtering)
  const getFilteredEvents = () => {
    if (!events) {
      return []; // 빈 배열 반환
    }
    // For demo purposes, we're just returning subsets of the events based on the tab
    // In a real app, you would filter based on event categories
    const filteredEvents = events.filter((event) =>
      event.id.includes("discover")
    ); // Just return first 8 events for all filters for now
    return filteredEvents;
  };

  const filteredEvents = getFilteredEvents();
  console.log(filteredEvents);

  return (
    <div className="main-container w-full h-auto bg-[#011829] relative overflow-hidden">
      <div className="mb-8">
        <EventsNavbar />
      </div>
      <div className="w-full pt-[3rem] pb-[4rem] px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="mb-6">
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-semibold text-white font-['Space_Grotesk']">
            Discover Sui Events
          </h1>

          {/* Description and Filter buttons in a flex container */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-2 mb-6">
            {/* Description text with max width */}
            <div className="max-w-xl mb-4 md:mb-0 md:mr-4">
              <p className="text-white text-lg">
                Explore popular events near you, browse by category, or check
                out some of the great events in the Sui community.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex bg-[#0a2539] rounded-full p-[0.25rem] w-fit ">
              <button
                className={`py-[0.5rem] px-[1rem] rounded-full text-[0.875rem] font-medium transition-colors ${activeTab === "all" ? "bg-white text-[#011829]" : "text-white"}`}
                onClick={() => setActiveTab("all")}
              >
                All
              </button>
              <button
                className={`py-[0.5rem] px-[1rem] rounded-full text-[0.875rem] font-medium transition-colors ${activeTab === "hackathon" ? "bg-white text-[#011829]" : "text-white"}`}
                onClick={() => setActiveTab("hackathon")}
              >
                Hackathon
              </button>
              <button
                className={`py-[0.5rem] px-[1rem] rounded-full text-[0.875rem] font-medium transition-colors ${activeTab === "conference" ? "bg-white text-[#011829]" : "text-white"}`}
                onClick={() => setActiveTab("conference")}
              >
                Conference
              </button>
              <button
                className={`py-[0.5rem] px-[1rem] rounded-full text-[0.875rem] font-medium transition-colors ${activeTab === "meetups" ? "bg-white text-[#011829]" : "text-white"}`}
                onClick={() => setActiveTab("meetups")}
              >
                Meet-ups
              </button>
              <button
                className={`py-[0.5rem] px-[1rem] rounded-full text-[0.875rem] font-medium transition-colors ${activeTab === "others" ? "bg-white text-[#011829]" : "text-white"}`}
                onClick={() => setActiveTab("others")}
              >
                Others
              </button>
            </div>
          </div>
        </div>

        {/* Event Cards - Two columns, four rows layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
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
              No events found for this category. Check back soon!
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
