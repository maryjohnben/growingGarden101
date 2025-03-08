import React from "react"
import NavBar from "./components/NavBar.jsx";
import { Home } from "./src/pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {About} from "./src/pages/About.jsx";
import {EasyPlants} from "./src/pages/EasyPlants.jsx";
import FunFacts from "./src/pages/FunFacts.jsx";
import {PlantResults} from "./src/pages/PlantResults.jsx";
import {LocationAssistanceAI} from "./src/pages/LocationAssistanceAI.jsx";
export const Routing = () => {

    return(
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/easyPlants' element={<EasyPlants/>}/>
                <Route path='/funFacts' element={<FunFacts/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/results' element={<PlantResults/>}/>
                <Route path='/assistance' element={<LocationAssistanceAI/>}/>
            </Routes>
        </Router>
    );
};
