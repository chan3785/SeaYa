import React from "react";

interface ProjectCardProps {
  title: string;
  creator: string;
  date: string;
  prize: string;
  imageUrl: string;
  onClick?: () => void;
}

export default function ProjectCard({
  title,
  creator,
  date,
  prize,
  imageUrl,
  onClick,
}: ProjectCardProps) {
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
        <div className="flex items-center text-white mb-[0.5rem]">
          <svg
            width="1rem"
            height="1rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="ml-[0.5rem] text-[0.875rem]">{creator}</span>
        </div>
        <div className="flex items-center text-white mb-[0.5rem]">
          <svg
            width="1rem"
            height="1rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              stroke="#FFD700"
              fill="#FFD700"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="ml-[0.5rem] text-[0.875rem] text-[#FFD700]">
            {prize}
          </span>
        </div>
      </div>
      <div className="w-[8rem] h-[8rem] relative overflow-hidden mr-[1.5rem] hidden md:block">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-[0.625rem]"
        />
      </div>
    </div>
  );
}
