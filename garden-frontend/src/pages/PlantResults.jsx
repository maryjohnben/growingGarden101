import React from "react";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Box, Button, Card, CardContent, Container, Typography} from "@mui/material";


export const PlantResults = () => {
    const navigator = useNavigate();
    const location = useLocation();
    const plantData = location.state?.plantData || [];
    const [selectedPlant, setSelectedPlant] = useState(null);

    const handleSelectPlant = (plant) => {
        setSelectedPlant(plant);
        console.log(selectedPlant);
    };

    const handleLocation = () => {
        //get user location

    }
    return (
         // Display API Response
         <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
                Plant Search Results
            </Typography>
        <Box>
      {plantData.length > 0 ? (
          plantData.map((plant, index) => (
            <Card key={index} sx={{ marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h6">{plant["Common Name"]}</Typography>
                <Typography variant="body1"><strong>Scientific Name:</strong> {plant["Scientific Name"]}</Typography>
                <Typography variant="body1"><strong>Soil pH:</strong> {plant["Soil ph"]}</Typography>
                <Typography variant="body1"><strong>Sun Requirements:</strong> {plant["Sun"]}</Typography>
                <Typography variant="body1"><strong>Soil Type:</strong> {plant["Soil Type"]}</Typography>
                <Typography variant="body1"><strong>Time to water:</strong> {plant["Time to water"]}</Typography>
                <Typography variant="body1"><strong>Time to plant:</strong> {plant["Time to plant"]}</Typography>
                  {/* Select Button Added */}
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
        <Typography variant="body1">No plant data available.</Typography>
      )}
      {/*//location based*/}
            <Box textAlign="center" marginTop={4}>
                <Typography variant="h6">Do you want location-based plant care assistance using AI?</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLocation}
                     disabled={!selectedPlant} // Disabled if no plant is selected
                    sx={{ marginRight: 2, backgroundColor: "green" }}
                >
                    Yes, Please!
                </Button>
                <Button variant="outlined" color="secondary" onClick={() => navigator("/")}>
                    No, Go Back
                </Button>
            </Box>
        </Box>
            </Container>
      )}