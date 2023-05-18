import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from './Home/Home'
import Work from './Work/Work'
import About from './About/About'
import { Outlet } from 'react-router-dom'

const MainSection = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainSection