import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import EpicCaseStudy from "./EpicCaseStudy"; // New file for case study

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />

        {/* Case Study Page Route */}
        <Route path="/epic-case-study" element={<EpicCaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
