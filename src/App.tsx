import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
// import Home from "./Home";
import HomePage from "./HomePage";
import Login from "./Login";
import Navbar from "./Navbar";
import Signup from "./Signup";

function App() {
  const location = useLocation();
  return (
    <div className="flex flex-col h-full">
    {!(location.pathname.includes('login') || location.pathname.includes('signUp')) && <Navbar />}
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signUp" element={<Signup />}/>
    </Routes>
    {!(location.pathname.includes('login') || location.pathname.includes('signUp')) && <Footer />}
    </div>
  );
}

export default App;
