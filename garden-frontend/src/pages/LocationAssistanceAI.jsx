import React, {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Box, Button, Card, CardContent, Container, Typography, Paper, Grid} from "@mui/material";

//plant care info from AI displayed here
export const LocationAssistanceAI = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const selectedPlant = location.state?.selectedPlant || {}; //passed as objects
    const AI_PlantCareInfo = location.state?.AI_PlantCareInfo || {};

    // console.log("in location", AI_PlantCareInfo["Common Name"]);
    // console.log("in location general", AI_PlantCareInfo);

    // useEffect(() => {
    //     console.log("Selected Plant:", selectedPlant);
    //     console.log("AI Plant Care Info:", AI_PlantCareInfo);
    // }, [selectedPlant, AI_PlantCareInfo]);

    if (!AI_PlantCareInfo) {
        // error will be caught and displayed in PlantResults before getting to this page but just as a safe option
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
                        marginTop: 2,
                        textAlign: 'center'
                    }}>
                        <Typography variant="h3" sx={{ color: '#2e7d32', fontWeight: 'bold', marginBottom: 3 }}>
                            🌱 Plant Care Assistance 🌱
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 3, fontSize: '1.1rem' }}>
                            🌿 No plant care instructions available. Please try again at a later time.
                        </Typography>
                        <Button 
                            variant="outlined" 
                            color="secondary" 
                            onClick={() => navigate(-1)}
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
                    </Paper>
                </Container>
            </Box>
        );
    }

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
                        🌱 Plant Care Assistance 🌱
                    </Typography>

                    <Card sx={{ 
                        marginBottom: 3,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                        border: '2px solid #4caf50'
                    }}>
                        <CardContent sx={{ padding: 3 }}>
                            <Typography 
                                variant="h4" 
                                sx={{ 
                                    color: '#2e7d32',
                                    fontWeight: 'bold',
                                    marginBottom: 3,
                                    textAlign: 'center'
                                }}
                            >
                                🌿 Detailed AI-Assisted Location Based Plant Care Instructions for {AI_PlantCareInfo["Common Name"]?.split(",")[0]}
                            </Typography>
                            
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                        <strong>🌿 Common Name:</strong> {AI_PlantCareInfo["Common Name"]}
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                        <strong>🔬 Scientific Name:</strong> {AI_PlantCareInfo["Scientific Name"]}
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                        <strong>🌱 Soil Type:</strong> {AI_PlantCareInfo["Soil Type"]}
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                        <strong>🌡️ Soil pH:</strong> {AI_PlantCareInfo["Soil pH"]}
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                        <strong>☀️ Sun:</strong> {AI_PlantCareInfo["Sun"]}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                        <strong>📅 Time to plant:</strong> {AI_PlantCareInfo["Time to plant"]}
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                        <strong>💧 Time to water:</strong> {AI_PlantCareInfo["Time to water"]}
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                        <strong>💧 Watering:</strong> {AI_PlantCareInfo["Watering"]}
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                        <strong>🌱 Fertilizing:</strong> {AI_PlantCareInfo["Fertilizing"]}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Grid container spacing={3} sx={{ marginBottom: 3 }}>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ 
                                borderRadius: 3,
                                background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                                border: '2px solid #2196f3'
                            }}>
                                <CardContent sx={{ padding: 3 }}>
                                    <Typography variant="h6" sx={{ 
                                        fontWeight: 'bold',
                                        color: '#1976d2',
                                        marginBottom: 2,
                                        textAlign: 'center'
                                    }}>
                                        🌤️ Current Weather
                                    </Typography>
                                    <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                                        <strong>🌡️ Conditions:</strong> {AI_PlantCareInfo["Current Weather"]?.Conditions}<br/>
                                        <strong>💧 Humidity:</strong> {AI_PlantCareInfo["Current Weather"]?.Humidity}<br/>
                                        <strong>🌡️ Temperature:</strong> {AI_PlantCareInfo["Current Weather"]?.Temperature}<br/>
                                        <strong>💨 Wind Speed:</strong> {AI_PlantCareInfo["Current Weather"]?.["Wind Speed"]}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        
                        <Grid item xs={12} md={6}>
                            <Card sx={{ 
                                borderRadius: 3,
                                background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
                                border: '2px solid #9c27b0'
                            }}>
                                <CardContent sx={{ padding: 3 }}>
                                    <Typography variant="h6" sx={{ 
                                        fontWeight: 'bold',
                                        color: '#7b1fa2',
                                        marginBottom: 2,
                                        textAlign: 'center'
                                    }}>
                                        🌟 Weather Based Recommendations
                                    </Typography>
                                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                                        {typeof AI_PlantCareInfo["Weather based recommendations"] === 'string' 
                                            ? AI_PlantCareInfo["Weather based recommendations"]
                                            : JSON.stringify(AI_PlantCareInfo["Weather based recommendations"], null, 2)
                                        }
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Box sx={{ 
                        textAlign: 'center', 
                        marginBottom: 3,
                        padding: 3,
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        borderRadius: 3,
                        border: '2px solid #4caf50'
                    }}>
                        <Typography variant="h6" sx={{ 
                            color: '#2e7d32',
                            fontWeight: 'bold',
                            marginBottom: 2
                        }}>
                            🌱 Ready to grow your perfect garden? 🌱
                        </Typography>
                        
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button 
                                sx={{
                                    backgroundColor: "#4caf50",
                                    borderRadius: 3,
                                    padding: '12px 24px',
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                    fontSize: '1.1em',
                                    '&:hover': {
                                        backgroundColor: "#45a049"
                                    }
                                }} 
                                variant="contained" 
                                color="primary"
                                onClick={() => navigate("/")}
                            >
                                🔍 Search Another Plant
                            </Button>
                            <Button 
                                variant="outlined" 
                                color="secondary" 
                                onClick={() => navigate(-1)}
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
                </Paper>
            </Container>
        </Box>
    )
}
