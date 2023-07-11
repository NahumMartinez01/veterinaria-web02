import { useState } from "react";
import "./App.css";
import "./index.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import {UserContext} from "./context/UserContext";
import Service from "./components/Service";
import About from "./components/About";
import RegisterCustomer from "./components/RegisterCustomer";

function App() {
  return (
    <UserContext>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<RegisterCustomer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext>
  );
}

export default App;
