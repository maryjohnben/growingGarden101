import React from "react";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Box, Button, Card, CardContent, Container, Typography, Paper} from "@mui/material";
import Grid from "@mui/material/Grid2";
import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_FLASK_APP_API_BASE_URL || "http://localhost:5000";

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
                } finally {
                    setLoading(false);
                }
            },
            (error) => {
                console.error("Geolocation error:", error);
                setError("Unable to get location. Please enable location services.");
                setLoading(false);
            }
        );
    } catch (error) {
        console.error("handleLocation error:", error);
        setError(error.message);
        setLoading(false);
    }
};

    return (
        <Box sx={{ 
            background: 'linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%)',
            minHeight: '100vh',
            padding: 3
        }}>
            <Container maxWidth="lg">
                <Paper elevation={3} sx={{ 
                    padding: 4, 
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid #4caf50',
                    marginTop: 2
                }}>
                    <Typography 
                        variant="h2" 
                        sx={{ 
                            textAlign: 'center',
                            color: '#2e7d32',
                            fontWeight: 'bold',
                            marginBottom: 4
                        }}
                    >
                        🌱 Plant Search Results 🌱
                    </Typography>

                    {error && (
                        <Box sx={{ 
                            color: 'red', 
                            backgroundColor: '#ffebee', 
                            padding: 2, 
                            borderRadius: 2, 
                            marginBottom: 3,
                            textAlign: 'center'
                        }}>
                            ⚠️ {error}
                        </Box>
                    )}

                    <Box>
                        {plantData.length > 0 ? (
                            plantData.map((plant, index) => (
                                <Card key={index} sx={{ 
                                    marginBottom: 3,
                                    borderRadius: 3,
                                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                                    border: selectedPlant === plant ? '3px solid #4caf50' : '2px solid #ddd',
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 8px 24px rgba(76, 175, 80, 0.2)'
                                    }
                                }}>
                                    <CardContent sx={{ padding: 3 }}>
                                        <Typography 
                                            variant="h4" 
                                            sx={{ 
                                                color: '#2e7d32',
                                                fontWeight: 'bold',
                                                marginBottom: 2
                                            }}
                                        >
                                            🌿 {plant["Common Name"]}
                                        </Typography>
                                        
                                        <Grid container spacing={2}>
                                            <Grid xs={12} sm={6}>
                                                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                                    <strong>🔬 Scientific Name:</strong> {plant["Scientific Name"]}
                                                </Typography>
                                                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                                    <strong>🌡️ Soil pH:</strong> {plant["Soil ph"]}
                                                </Typography>
                                                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                                    <strong>☀️ Sun Requirements:</strong> {plant["Sun"]}
                                                </Typography>
                                            </Grid>
                                            <Grid xs={12} sm={6}>
                                                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                                    <strong>🌱 Soil Type:</strong> {plant["Soil Type"]}
                                                </Typography>
                                                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                                    <strong>💧 Time to water:</strong> {plant["Time to water"]}
                                                </Typography>
                                                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                                    <strong>📅 Time to plant:</strong> {plant["Time to plant"]}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        
                                        <Button
                                            variant="contained"
                                            color={selectedPlant === plant ? "success" : "primary"}
                                            onClick={() => handleSelectPlant(plant)}
                                            disabled={loading}
                                            sx={{ 
                                                marginTop: 2,
                                                borderRadius: 3,
                                                padding: '12px 24px',
                                                fontWeight: 'bold',
                                                textTransform: 'none',
                                                fontSize: '1.1em',
                                                boxShadow: selectedPlant === plant ? '0 6px 16px rgba(76, 175, 80, 0.4)' : '0 4px 12px rgba(25, 118, 210, 0.3)',
                                                '&:hover': {
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: selectedPlant === plant ? '0 8px 20px rgba(76, 175, 80, 0.5)' : '0 6px 16px rgba(25, 118, 210, 0.4)'
                                                },
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            {selectedPlant === plant ? "✅ Selected" : "🌱 Select This Plant"}
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            <Box sx={{ textAlign: 'center', padding: 4 }}>
                                <Typography variant="h5" sx={{ color: '#666', marginBottom: 2 }}>
                                    🌱 No plant data available.
                                </Typography>
                            </Box>
                        )}
                        
                        <Box sx={{ 
                            textAlign: 'center', 
                            marginTop: 4,
                            padding: 3,
                            backgroundColor: 'rgba(76, 175, 80, 0.1)',
                            borderRadius: 3,
                            border: '2px solid #4caf50'
                        }}>
                            <Typography variant="h6" sx={{ marginBottom: 2, color: '#2e7d32', fontWeight: 'bold' }}>
                                🌍 Do you want location-based plant care assistance using AI?
                            </Typography>
                            
                            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                                {loading ? (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disabled
                                        sx={{ 
                                            borderRadius: 3,
                                            padding: '12px 24px',
                                            fontWeight: 'bold',
                                            textTransform: 'none',
                                            fontSize: '1.1em'
                                        }}
                                    >
                                        ⏳ Loading...
                                    </Button>
                                ) : (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleLocation}
                                        disabled={!selectedPlant}
                                        sx={{ 
                                            borderRadius: 3,
                                            padding: '12px 24px',
                                            fontWeight: 'bold',
                                            textTransform: 'none',
                                            fontSize: '1.1em',
                                            backgroundColor: "#4caf50",
                                            '&:hover': {
                                                backgroundColor: "#45a049"
                                            }
                                        }}
                                    >
                                        🌍 Yes, Please!
                                    </Button>
                                )}
                                
                                <Button 
                                    variant="outlined" 
                                    color="secondary" 
                                    onClick={() => navigate("/")}
                                    disabled={loading}
                                    sx={{ 
                                        borderRadius: 3,
                                        padding: '12px 24px',
                                        fontWeight: 'bold',
                                        textTransform: 'none',
                                        fontSize: '1.1em'
                                    }}
                                >
                                    🏠 Go Back
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};