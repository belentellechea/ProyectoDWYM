import { useState } from "react";
import "./App.css";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home"
import { MyProfile } from "./Pages/MyProfile";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

function App() {

  return (
    <>
      <Router> 
        <div className="app">
        <Routes>
          <Route path="/*" element={<Navigate replace to="/"/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
