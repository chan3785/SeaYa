import React, { useState } from "react";
import { FiSearch, FiBell, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

export default function EventsNavbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Mock user data - in a real app, this would come from authentication
  const userData = {
    username: "User1234",
    email: "User1234@gmail.com",
    walletAddress: "0x752...b5a",
  };

  return (
    <div className="w-full bg-[#011829] py-4 px-4 sm:px-8 md:px-16 lg:px-24 flex justify-between items-center">
      <div className="flex items-center">
        <a
          href="/"
          className="text-white font-['Space_Grotesk'] text-[1.5rem] font-bold mr-8"
        >
          SeaYa
        </a>
        <div className="relative hidden md:block ml-40">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="bg-[#0a2539] text-white rounded-full py-2 pl-10 pr-4 w-[450px] focus:outline-none focus:ring-1 focus:ring-[#4da2ff]"
            placeholder="search events"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <a
          href="/projects"
          className="text-white font-['Space_Grotesk'] hidden md:block"
        >
          Projects
        </a>
        <a
          href="/discover-events"
          className="text-white font-['Space_Grotesk'] font-medium"
        >
          Discover Events
        </a>
        <a
          href="/vote"
          className="text-white font-['Space_Grotesk'] hidden md:block"
        >
          Vote
        </a>
        <div className="relative group">
          <button className="text-white font-['Space_Grotesk'] flex items-center space-x-1 hidden md:flex">
            <span>Create</span>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-[#0a2539] rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:bg-[#1e3a4f]"
            >
              Create Event
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:bg-[#1e3a4f]"
            >
              Create Project
            </a>
          </div>
        </div>

        {/* Notification Icon with Red Dot */}
        <div className="relative cursor-pointer hidden md:block">
          <FiBell className="h-5 w-5 text-white" />
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></div>
        </div>

        {/* User Avatar with Dropdown */}
        <div className="hidden md:block mx-4 cursor-pointer relative">
          <div
            className="w-8 h-8 rounded-full bg-[#0a2539] flex items-center justify-center overflow-hidden border border-[#4da2ff]"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <FiUser className="h-5 w-5 text-white" />
          </div>

          {/* Profile Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-[#011829] rounded-md shadow-lg py-4 z-20 border border-[#0a2539]">
              {/* User Info Section */}
              <div className="px-4 pb-3 border-b border-[#0a2539]">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#0a2539] flex items-center justify-center overflow-hidden border border-[#4da2ff] mr-3">
                    <FiUser className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      {userData.username}
                    </p>
                    <p className="text-gray-400 text-sm">{userData.email}</p>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <div className="bg-[#0a2539] rounded px-2 py-1 text-gray-400 text-xs flex items-center">
                    <span>{userData.walletAddress}</span>
                  </div>
                </div>
              </div>

              {/* Menu Options */}
              <div className="pt-2">
                <a
                  href="/profile"
                  className="block px-4 py-2 text-white hover:bg-[#1e3a4f] flex items-center"
                >
                  <CgProfile className="mr-2" /> Profile
                </a>
                <a
                  href="/settings"
                  className="block px-4 py-2 text-white hover:bg-[#1e3a4f] flex items-center"
                >
                  <FiSettings className="mr-2" /> Settings
                </a>
                <a
                  href="/logout"
                  className="block px-4 py-2 text-white hover:bg-[#1e3a4f]  items-center"
                >
                  <FiLogOut className="mr-2" /> Logout
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
