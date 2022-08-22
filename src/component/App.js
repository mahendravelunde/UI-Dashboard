import React from 'react';
import '../css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard"
import Auth from './Auth';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/animate.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/demo.css";
import Sidebar from './Sidebar';
import FullLayout from './FullLayout';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/fullLayout" element={<FullLayout />}/>
      
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
