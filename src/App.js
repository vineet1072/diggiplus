import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MyJobs from "./components/MyJobs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myjobs" element={<MyJobs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
