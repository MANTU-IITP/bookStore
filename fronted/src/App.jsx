import React from "react";
import Home from "./home/Home";

import {Route, Routes } from "react-router-dom";
import Coursess from "./coursess/Coursess";
import Signup from "./componentss/Signup";




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Coursess/>}/>
      <Route path="/signup" element={<Signup/>}/>
     
      
    </Routes>

        
    </>

   
      
   
  );
}

export default App
