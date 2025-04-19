import React, { useState } from "react";
import Footer from "../Footer";
import EventsNavbar from "../events/EventsNavbar";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import { projects, ProjectType } from "./projectData";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<
    "all" | "hackathon" | "development" | "design" | "others"
  >("all");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  // Filter projects based on active tab
  const getFilteredProjects = () => {
    if (activeTab === "all") {
      return projects;
    }
    // Filter based on project categories
    return projects.filter(
      (project) => project.category?.toLowerCase() === activeTab
    );
  };

  const filteredProjects = getFilteredProjects();

  return (
    <div className="main-container w-full h-auto bg-[#011829] relative overflow-hidden">
      <div className="mb-8">
        <EventsNavbar />
      </div>
      <div className="w-full pt-[3rem] pb-[4rem] px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="mb-6">
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-semibold text-white font-['Space_Grotesk']">
            Discover Projects
          </h1>

          {/* Description and Filter buttons in a flex container */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-2 mb-6">
            {/* Description text with max width */}
            <div className="max-w-xl mb-4 md:mb-0 md:mr-4">
              <p className="text-white text-lg">
                Explore projects, browse by category, or check out some of the
                great project in the Sui community.
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
                className={`py-[0.5rem] px-[1rem] rounded-full text-[0.875rem] font-medium transition-colors ${activeTab === "development" ? "bg-white text-[#011829]" : "text-white"}`}
                onClick={() => setActiveTab("development")}
              >
                Development
              </button>
              <button
                className={`py-[0.5rem] px-[1rem] rounded-full text-[0.875rem] font-medium transition-colors ${activeTab === "design" ? "bg-white text-[#011829]" : "text-white"}`}
                onClick={() => setActiveTab("design")}
              >
                Design
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

        {/* Project Cards - Two columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                creator={project.creator}
                date={project.date}
                prize={project.prize}
                imageUrl={project.imageUrl}
                onClick={() => setSelectedProject(project)}
              />
            ))
          ) : (
            <p className="text-white text-lg">
              No projects found for this category. Check back soon!
            </p>
          )}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
