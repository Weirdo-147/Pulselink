import React from "react";
import Home from "./components/Home"
import ChatHome from "./components/ChatInterface/ChatHome";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App=()=>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ChatHome" element={<ChatHome/>}></Route>
      </Routes>
    </Router>
    
  )
}
export default App;
