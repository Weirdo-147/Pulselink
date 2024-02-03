import React from "react";
import Home from "./components/Home"
import ChatHome from "./components/ChatInterface/ChatHome";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";

const App=()=>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/ChatHome" element={<ChatHome/>}></Route>
      </Routes>
    </Router>
    
  )
}
export default App;
