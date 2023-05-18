import React from 'react'
import "./App.css"
import About from './pages/About/About'
import Work from './pages/Work/Work'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import MainSection from './pages/MainSection'

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSection />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App