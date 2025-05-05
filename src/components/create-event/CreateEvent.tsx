import React, { useState } from "react";
import EventsNavbar from "../events/EventsNavbar";
import DatePicker from "./DatePicker";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import useDate from "../../context/useDate";
import TimePicker from "./TimePicker";
import TimeZonePicker from "./TimezonePicker";

interface FormData {
  eventName: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  timeZone: string;
  location: string;
  description: string;
  poapTitle: string;
  poapDescription: string;
  attendeeAmount: string;
  ticketsOption?: string;
}

export default function CreateEvents() {
  const [formData, setFormData] = useState<FormData>({
    eventName: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    timeZone: "",
    location: "",
    description: "",
    poapTitle: "",
    poapDescription: "",
    attendeeAmount: "",
    ticketsOption: "",
  });
  const [isMoreOptionsOpen, setIsMoreOptionsOpen] = useState(false);
  const { dateValue } = useDate();
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="main-container w-full h-auto bg-[#011829] relative overflow-hidden">
      <div className="mb-8">
        <EventsNavbar />
      </div>
      <div className="w-full pt-[2rem] pb-[4rem] px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="mb-6">
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            placeholder="Enter Event Name"
            className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-semibold text-white font-['Space_Grotesk'] bg-transparent"
          />
        </div>
        <div className="space-y-4">
          <div className="relative flex gap-4">
            <DatePicker className="text-white" />
            <TimePicker />
            <TimeZonePicker />
          </div>
          <div className="relative">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
              📍
            </span>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Add location"
              className="w-full p-2 pl-8 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="relative">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
              ✏️
            </span>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Event Description"
              className="w-full p-2 pl-8 rounded bg-gray-700 text-white"
            ></textarea>
          </div>
          <div>
            <button
              onClick={() => setIsMoreOptionsOpen(!isMoreOptionsOpen)}
              className="text-gray-300"
            >
              More options {isMoreOptionsOpen ? "▲" : "▼"}
            </button>
            {isMoreOptionsOpen && (
              <div className="mt-2">
                <div className="relative">
                  <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                    🎫
                  </span>
                  <input
                    type="text"
                    name="ticketsOption"
                    value={formData.ticketsOption}
                    onChange={handleChange}
                    placeholder="Tickets option"
                    className="w-full p-2 pl-8 rounded bg-gray-700 text-white"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              name="poapTitle"
              value={formData.poapTitle}
              onChange={handleChange}
              placeholder="POAP Title"
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="poapDescription"
              value={formData.poapDescription}
              onChange={handleChange}
              placeholder="POAP Description"
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="relative">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
              👥
            </span>
            <input
              type="number"
              name="attendeeAmount"
              value={formData.attendeeAmount}
              onChange={handleChange}
              placeholder="Amount of attendee"
              className="w-full p-2 pl-8 rounded bg-gray-700 text-white"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full p-2 bg-blue-600 rounded text-white"
          >
            Create Event
          </button>
        </div>
      </div>
      <div className="md:w-1/2 p-4">
        <img
          src="https://via.placeholder.com/300x300?text=Cosmic+Scene"
          alt="Cosmic scene"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
}
