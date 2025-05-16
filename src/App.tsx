import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./page";
import DiscoverEventsPage from "./page/discover-events";
import ProjectsPage from "./page/projects";
import CreateEventsPage from "./page/create-event";
import CreateProjectsPage from "./page/create-project";
import ProfilePage from "./page/profile";
import VotePage from "./page/vote";
import SettingsPage from "./page/settings";
import ProjectDetailPage from "./page/project-detail";
import EventDetailPage from "./page/event-detail";
import VoteProposalPage from "./page/vote-proposal";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/discover-events" element={<DiscoverEventsPage />} />
        <Route path="/discover-events/:id" element={<EventDetailPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/create-events" element={<CreateEventsPage />} />
        <Route path="/create-projects" element={<CreateProjectsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="/proposal/:id" element={<VoteProposalPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}
