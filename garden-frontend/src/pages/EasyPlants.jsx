import React from "react";
import {Box, Typography, Paper, Container, Grid, Card, CardContent} from "@mui/material";

export const EasyPlants = () =>{
    const easyPlants = [
        { name: "Bell Peppers", emoji: "🌶️" },
        { name: "Blackberries", emoji: "🍇" },
        { name: "Raspberries", emoji: "🍓" },
        { name: "Cabbage", emoji: "🥬" },
        { name: "Cucumbers", emoji: "🥒" },
        { name: "Garlic", emoji: "🧄" },
        { name: "Strawberries", emoji: "🍓" },
        { name: "Tomatoes", emoji: "🍅" },
        { name: "Zucchini", emoji: "🥒" },
        { name: "Squash", emoji: "🎃" }
    ];

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
                            fontFamily: 'cursive',
                            fontSize: '3rem',
                            textAlign: 'center',
                            color: '#2e7d32',
                            fontWeight: 'bold',
                            marginBottom: 2
                        }}
                    >
                        🌱 Beginner Friendly Plants 🌱
                    </Typography>

                    <Typography 
                        variant="h3" 
                        sx={{ 
                            fontFamily: 'Avenir',
                            fontSize: '2rem',
                            textAlign: 'center',
                            color: '#4caf50',
                            fontWeight: 'bold',
                            marginBottom: 4
                        }}
                    >
                        🌿 Top 10 Easiest Plants to Grow 🌿
                    </Typography>

                    <Grid container spacing={3}>
                        {easyPlants.map((plant, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ 
                                    borderRadius: 3,
                                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                                    border: '2px solid #4caf50',
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 12px 24px rgba(76, 175, 80, 0.3)'
                                    }
                                }}>
                                    <CardContent sx={{ textAlign: 'center', padding: 3 }}>
                                        <Typography 
                                            variant="h1" 
                                            sx={{ 
                                                fontSize: '3rem',
                                                marginBottom: 1
                                            }}
                                        >
                                            {plant.emoji}
                                        </Typography>
                                        <Typography 
                                            variant="h6" 
                                            sx={{ 
                                                fontWeight: 'bold',
                                                color: '#2e7d32',
                                                marginBottom: 1
                                            }}
                                        >
                                            #{index + 1}
                                        </Typography>
                                        <Typography 
                                            variant="h5" 
                                            sx={{ 
                                                fontWeight: 'bold',
                                                color: '#333'
                                            }}
                                        >
                                            {plant.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{ 
                        marginTop: 4, 
                        textAlign: 'center',
                        padding: 3,
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        borderRadius: 3,
                        border: '2px solid #4caf50'
                    }}>
                        <Typography 
                            variant="h6" 
                            sx={{ 
                                color: '#2e7d32',
                                fontWeight: 'bold'
                            }}
                        >
                            🌟 Perfect for beginners! These plants are hardy, forgiving, and will give you confidence as you start your gardening journey! 🌟
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    )
}
