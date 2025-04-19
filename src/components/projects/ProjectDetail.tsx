import React from "react";
import { ProjectType } from "./projectData";

interface ProjectDetailProps {
  project: ProjectType;
  onClose: () => void;
}

export default function ProjectDetail({
  project,
  onClose,
}: ProjectDetailProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
      <div className="bg-[#011829] rounded-[1.25rem] max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-[2rem]">
          <div className="flex justify-between items-start mb-[1.5rem]">
            <h2 className="text-[2rem] font-semibold text-white font-['Space_Grotesk']">
              {project.title}
            </h2>
            <button
              onClick={onClose}
              className="text-white text-[1.5rem] hover:text-gray-300"
            >
              ×
            </button>
          </div>

          <div className="mb-[1.5rem]">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-[12rem] object-cover rounded-[0.625rem]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[1.5rem]">
            <div className="flex items-center text-[#4da2ff]">
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
              <span className="ml-[0.5rem] text-[0.875rem]">
                {project.date}
              </span>
            </div>
            <div className="flex items-center text-white">
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
              <span className="ml-[0.5rem] text-[0.875rem]">
                {project.creator}
              </span>
            </div>
            <div className="flex items-center text-white">
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
                {project.prize}
              </span>
            </div>
            {project.category && (
              <div className="flex items-center text-white">
                <svg
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 9H20"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 15H20"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 3L8 21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3L14 21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-[0.5rem] text-[0.875rem] capitalize">
                  {project.category}
                </span>
              </div>
            )}
          </div>

          <div className="mb-[2rem]">
            <h3 className="text-[1.25rem] font-semibold text-white mb-[0.5rem] font-['Space_Grotesk']">
              Description
            </h3>
            <p className="text-white text-[0.875rem] leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex justify-center">
            <button className="bg-[#4da2ff] text-white py-[0.75rem] px-[2rem] rounded-full font-medium hover:bg-[#3a8ad9] transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
