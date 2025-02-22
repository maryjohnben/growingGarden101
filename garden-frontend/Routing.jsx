import React from "react"
import NavBar from "./components/NavBar.jsx";
import { Home } from "./src/pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {About} from "./src/pages/About.jsx";
export const Routing = () => {
    return(
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </Router>
    );
};
