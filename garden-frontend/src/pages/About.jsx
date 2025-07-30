import React from "react";
import {Box, Typography, Paper, Container} from "@mui/material";

export const About = () => {
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
                            marginBottom: 4
                        }}
                    >
                        🌱 About Growing Garden 101 🌱
                    </Typography>
                    
                    <Box sx={{ maxWidth: "800px", margin: "0 auto" }}>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                fontFamily: 'Avenir',
                                fontSize: '1.2rem',
                                lineHeight: 1.8,
                                color: '#333',
                                marginBottom: 3,
                                textAlign: 'justify'
                            }}
                        >
                            🌿 Welcome to Growing Garden 101, your ultimate gardening companion! Whether you're a 
                            seasoned "green thumb" or just starting out with your very first seedling, Growing Garden 101 
                            is here to support you every step of the way. Our mission is simple: to make gardening 
                            accessible, enjoyable, and successful for everyone, regardless of experience level.
                        </Typography>

                        <Typography 
                            variant="body1" 
                            sx={{ 
                                fontFamily: 'Avenir',
                                fontSize: '1.2rem',
                                lineHeight: 1.8,
                                color: '#333',
                                marginBottom: 3,
                                textAlign: 'justify'
                            }}
                        >
                            🌸 At Growing Garden 101, we believe that gardening is more than just a hobby—it's a way to 
                            connect with nature, grow your own fresh produce, and create a sustainable lifestyle. 
                            That's why we offer a wealth of resources, expert tips, and easy-to-follow guides tailored 
                            to beginners and experienced gardeners alike. From planning your garden layout to 
                            understanding soil health, watering schedules, and seasonal planting, we've got you covered.
                        </Typography>

                        <Typography 
                            variant="body1" 
                            sx={{ 
                                fontFamily: 'Avenir',
                                fontSize: '1.2rem',
                                lineHeight: 1.8,
                                color: '#333',
                                textAlign: 'justify'
                            }}
                        >
                            🌺 Join a thriving community of garden enthusiasts who share their experiences, challenges, 
                            and triumphs. Let Growing Garden 101 inspire you to transform your outdoor space, nurture 
                            your plants, and cultivate your gardening skills. Together, let's grow something amazing! 🌺
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    )
}
