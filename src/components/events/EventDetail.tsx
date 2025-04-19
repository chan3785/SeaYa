import React from "react";
import { EventType } from "./eventData";

interface EventDetailProps {
  event: EventType;
  onClose: () => void;
}

export default function EventDetail({ event, onClose }: EventDetailProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-[1rem]">
      <div className="bg-black rounded-[1.25rem] w-full max-w-[48rem] max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-[1rem] right-[1rem] w-[2rem] h-[2rem] flex items-center justify-center bg-[#4da2ff] rounded-full z-10"
          >
            <svg
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="h-[15.625rem] overflow-hidden">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-[1.5rem]">
            <h2 className="text-[2rem] font-semibold text-white mb-[1rem] font-['Space_Grotesk']">
              {event.title}
            </h2>

            <div className="flex items-center text-[#4da2ff] mb-[1rem]">
              <svg
                width="1.25rem"
                height="1.25rem"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#4da2ff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 6V12L16 14"
                  stroke="#4da2ff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-[0.5rem] text-[1rem]">{event.date}</span>
            </div>

            <div className="flex items-center text-white mb-[1rem]">
              <svg
                width="1.25rem"
                height="1.25rem"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-[0.5rem] text-[1rem]">{event.location}</span>
            </div>

            <div className="flex items-center mb-[1.5rem]">
              <span className="text-[0.875rem] text-gray-400">
                Hosted by {event.host}
              </span>
            </div>

            <div className="border-t border-[#1e3a4f] pt-[1rem]">
              <h3 className="text-[1.25rem] font-semibold text-white mb-[0.5rem] font-['Space_Grotesk']">
                About this event
              </h3>
              <p className="text-white text-[1rem] leading-relaxed">
                {event.description ||
                  "No description available for this event."}
              </p>

              <div className="mt-[2rem] flex justify-end">
                <button className="bg-[#4da2ff] text-white py-[0.5rem] px-[1.5rem] rounded-full font-medium hover:bg-[#3b8de6] transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
