import React from 'react'
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../../Pages/Home/Home';
import Dishes from '../../Pages/Dishes/Dishes';
import Booking from '../../Pages/Booking/Booking';
import About from '../../Pages/About/About';
import NotFound from '../../Pages/NotFound/NotFound';

function LayoutRoutes() {
  return (
    <Router>
        <Header></Header>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/dishes' element={<Dishes/>}></Route>
            <Route path='/services' element={<Booking/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/*' element={<NotFound/>}></Route>
        </Routes>

        <Footer></Footer>
    </Router>
  )
}

export default LayoutRoutes