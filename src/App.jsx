import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import ResearchPage from "./pages/ResearchPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            {/* <Route path="/skills" element={<SkillsPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
