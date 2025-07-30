import React from "react"
import NavBar from "./components/NavBar.jsx";
import { Home } from "./src/pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {About} from "./src/pages/About.jsx";
import {EasyPlants} from "./src/pages/EasyPlants.jsx";
import FunFacts from "./src/pages/FunFacts.jsx";
import {PlantResults} from "./src/pages/PlantResults.jsx";
import {LocationAssistanceAI} from "./src/pages/LocationAssistanceAI.jsx";
import { Footer } from "./src/pages/Footer.jsx";
import { Box } from "@mui/material";

export const Routing = () => {

    return(
        <Router>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                minHeight: '100vh' 
            }}>
                <NavBar />
                <Box sx={{ flex: 1 }}>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/easyPlants' element={<EasyPlants/>}/>
                        <Route path='/funFacts' element={<FunFacts/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/results' element={<PlantResults/>}/>
                        <Route path='/assistance' element={<LocationAssistanceAI/>}/>
                    </Routes>
                </Box>
                <Footer />
            </Box>
        </Router>
    );
};
