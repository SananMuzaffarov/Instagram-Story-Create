import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import StoryView from './components/StoryView';
import Home from './pages/Home';
import StoryCreate from './components/StoryCreate';
const App = () => {

  return (
    <Router>
      <Sidebar  />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/storyview/:id" element={<StoryView/>}></Route>
      <Route path="/create" element={<StoryCreate />}></Route>  
      </Routes>
    </Router>
  )
}
export default App;