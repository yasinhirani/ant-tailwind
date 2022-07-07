import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Home from "./Home";
import HomePage from "./HomePage";
import Login from "./Login";
import Navbar from "./Navbar";
import Signup from "./Signup";

function App() {
  return (
    <div className="flex flex-col">
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signUp" element={<Signup />}/>
    </Routes>
    </div>
  );
}

export default App;
