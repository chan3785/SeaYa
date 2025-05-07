import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./page";
import EventsPage from "./page/events";
import DiscoverEventsPage from "./page/discover-events";
import ProjectsPage from "./page/projects";
import CreateEventsPage from "./page/create-event";
import CreateProjectsPage from "./page/create-project";
import ProfilePage from "./page/profile";
import VotePage from "./page/vote";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/discover-events" element={<DiscoverEventsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/create-events" element={<CreateEventsPage />} />
        <Route path="/create-projects" element={<CreateProjectsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/vote" element={<VotePage />} />
      </Routes>
    </Router>
  );
}
