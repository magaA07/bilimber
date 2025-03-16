import { useState } from "react";
import TestPage from "./features/testPage/TestPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Results from "./Results";
import SignIn from "./features/authPage/SignIn";
import SignUp from "./features/authPage/SignUp";
import Profile from "./features/profilePage/Profile";
function App() {
  async function receive() {
    try {
      let receive = fetch("");
      let data = (await receive).json();
    } catch (err) {}
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/verification" element={<Results />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
