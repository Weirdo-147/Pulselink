import React from "react";
import Home from "./components/Home"
import Chats from "./components/Chat/Chats";
import Messege from "./components/Chat/Messege";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App=()=>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Chats" element={<Chats/>}></Route>
        <Route path="/Messege" element={<Messege/>}></Route>
      </Routes>
    </Router>
    
  )
}
export default App;
