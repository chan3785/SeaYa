import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./page";
import EventsPage from "./page/events";
import DiscoverEventsPage from "./page/discover-events";
import ProjectsPage from "./page/projects";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/discover-events" element={<DiscoverEventsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}
