import React from "react";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Box, Button, Card, CardContent, Container, Typography} from "@mui/material";
import axios from "axios";

const API_BASE_URL =
  import.meta.env.FLASK_APP_API_BASE_URL || "http://localhost:5000";

export const PlantResults = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const plantData = location.state?.plantData || []; //data that is passed from Home.jsx
    const [selectedPlant, setSelectedPlant] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSelectPlant = (plant) => {
        setSelectedPlant(plant);
        // console.log("selected", selectedPlant);
    };
//if user allows location will be retrieved to get weather info which will be used to get location based ai assistance
    const handleLocation = async () => {
        try{
        //get user location
            if (!selectedPlant) return; // just to be safe

        setError(null);
        setLoading(true);
        console.log(loading);
        // Get user's location
        // console.log(navigator.geolocation);
  if (!("geolocation" in navigator)) {
            throw new Error("Geolocation is not supported by your browser.");
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {

                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    // console.log(latitude, longitude)

                    //data is send using .post this can pass more data securely than .get
                    const response = await axios.post(`${API_BASE_URL}/assistance`, {
                        selectedPlant: selectedPlant,
                        latitude: latitude,
                        longitude: longitude
                    });
                    // Navigate to assistance page with plant and location data
                    // console.log("initial", response.data);

                    //returned data is displayed in another page
                    navigate("/assistance", {
                        state: {
                            selectedPlant: selectedPlant,
                            AI_PlantCareInfo: response.data,
                        }
                    });
                } catch (innerError) {
                    console.error("Error processing location or POST request:", innerError);
                    setError("An error occurred while processing location data.");

                }
            },
            (error) => {
                console.error("Geolocation error:", error);
                setError("Unable to get location. Please enable location services.");
            }
        );
    } catch (error) {
        console.error("handleLocation error:", error);
        setError(error.message);
    }
};

    return (
         // Display API Response
         <Container maxWidth="xl">
            <Typography variant="h4" gutterBottom>
                Plant Search Results
            </Typography>
        <Box>
      {/*  if more than 1 plant displayed mapped into each result */}
      {plantData.length > 0 ? (
          plantData.map((plant, index) => (
            <Card key={index} sx={{ marginBottom: 2 }}>
                {/* any error thrown gets displayed */}
              {error && <Typography color="error">{error}</Typography>}
              <CardContent>
                <Typography variant="h6">{plant["Common Name"]}</Typography>
                <Typography variant="body1"><strong>Scientific Name:</strong> {plant["Scientific Name"]}</Typography>
                <Typography variant="body1"><strong>Soil pH:</strong> {plant["Soil ph"]}</Typography>
                <Typography variant="body1"><strong>Sun Requirements:</strong> {plant["Sun"]}</Typography>
                <Typography variant="body1"><strong>Soil Type:</strong> {plant["Soil Type"]}</Typography>
                <Typography variant="body1"><strong>Time to water:</strong> {plant["Time to water"]}</Typography>
                <Typography variant="body1"><strong>Time to plant:</strong> {plant["Time to plant"]}</Typography>
                  {/* Select Button used to send one plant data to get ai assistance from */}
                            <Button
                                variant="contained"
                                color={selectedPlant === plant ? "success" : "primary"}
                                onClick={() => handleSelectPlant(plant)}
                                sx={{ marginTop: 2 }}
                            >
                                {selectedPlant === plant ? "Selected" : "Select This Plant"}
                            </Button>
              </CardContent>
            </Card>
              ))): (
        <Typography variant="body1">No plant data available.</Typography> //just to be safe before this usually error will be thrown in home
      )}
      {/*//location based if needed by the user */}
            <Box textAlign="center" marginTop={4}>
                <Typography variant="h6">Do you want location-based plant care assistance using AI?</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLocation}
                     disabled={!selectedPlant} // Disabled if no plant is selected ensures user picks at least one plant
                    sx={{ marginRight: 2, backgroundColor: "green"}}
                >
                    Yes, Please!
                </Button>
                <Button variant="outlined" color="secondary" onClick={() => navigate("/")}>
                    Go Back
                </Button>
            </Box>
        </Box>

            </Container>
      )}