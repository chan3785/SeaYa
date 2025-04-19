import React from "react";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  host: string;
  imageUrl: string;
  onClick?: () => void;
}

export default function EventCard({
  title,
  date,
  location,
  host,
  imageUrl,
  onClick,
}: EventCardProps) {
  return (
    <div
      className="w-full bg-black rounded-[1.25rem] overflow-hidden mb-[1.5rem] hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-row items-center"
      onClick={onClick}
    >
      <div className="p-[1.5rem] flex-1 flex flex-col justify-center">
        <h3 className="text-[1.5rem] font-semibold text-white mb-[0.5rem] font-['Space_Grotesk']">
          {title}
        </h3>
        <div className="flex items-center text-[#4da2ff] mb-[0.5rem]">
          <svg
            width="1rem"
            height="1rem"
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
          <span className="ml-[0.5rem] text-[0.875rem]">{date}</span>
        </div>
        <div className="flex items-center text-white mb-[1rem]">
          <svg
            width="1rem"
            height="1rem"
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
          <span className="ml-[0.5rem] text-[0.875rem]">{location}</span>
        </div>
        <div className="flex items-center">
          <span className="text-[0.75rem] text-gray-400">Hosted by {host}</span>
        </div>
      </div>
      <div className="w-[26.7%] h-auto overflow-hidden flex items-center justify-center p-3">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
