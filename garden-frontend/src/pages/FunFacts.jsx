import React from "react";
import {Box, Typography, Paper, Container, Card, CardContent, Grid} from "@mui/material";

export default function FunFacts() {
    const funFacts = [
        {
            fact: "Tomato juice is the official state beverage of Ohio, honoring the part A. W. Livingston of Reynoldsburg, Ohio, played in popularizing the tomato in the late 1800s.",
            emoji: "🍅"
        },
        {
            fact: "Archaeologists have uncovered evidence that grapes were grown to make wine about 8,000 years ago in Mesopotamia (today's Iraq), although the ancient Egyptians were the first to record the process of making wine about 5,000 years ago.",
            emoji: "🍇"
        },
        {
            fact: "The word pineapple comes from European explorers who thought the fruit combined the look of a pinecone with flesh like that of an apple. Pineapples are the only edible members of the bromeliad family.",
            emoji: "🍍"
        },
        {
            fact: "From a botanical standpoint, avocados and pumpkins are fruits, not vegetables, because they bear the plants' seeds. Rhubarb, on the other hand, is a vegetable.",
            emoji: "🥑"
        },
        {
            fact: "Small pockets of air inside cranberries cause them to bounce and float in water.",
            emoji: "🫐"
        },
        {
            fact: "The first potatoes were cultivated in Peru about 7,000 years ago.",
            emoji: "🥔"
        },
        {
            fact: "Peaches, pears, apricots, quinces, strawberries, and apples are members of the rose family. So are ornamental species such as spirea, mountain ash, goatsbeard, and ninebark.",
            emoji: "🌹"
        },
        {
            fact: "The difference between nectarines and peaches is that nectarines don't have fuzzy skins. You can graft peach branches onto a nectarine tree or nectarine branches onto a peach tree so you have both types of fruits.",
            emoji: "🍑"
        },
        {
            fact: "Corn is only native to the Americas.",
            emoji: "🌽"
        },
        {
            fact: "A Sunflower is not just one flower. The sunflower is a huge flower, but the head or fuzzy brown center actually contains 1,000–2,000 individual flowers. Each of those individual flowers will produce a sunflower seed.",
            emoji: "🌻"
        }
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
                        🌱 Fun Facts about Gardening 🌱
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
                        🤔 Did you know? 🤔
                    </Typography>

                    <Grid container spacing={3}>
                        {funFacts.map((item, index) => (
                            <Grid item xs={12} md={6} key={index}>
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
                                    <CardContent sx={{ padding: 3 }}>
                                        <Box sx={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            marginBottom: 2 
                                        }}>
                                            <Typography 
                                                variant="h1" 
                                                sx={{ 
                                                    fontSize: '2.5rem',
                                                    marginRight: 2
                                                }}
                                            >
                                                {item.emoji}
                                            </Typography>
                                            <Typography 
                                                variant="h6" 
                                                sx={{ 
                                                    fontWeight: 'bold',
                                                    color: '#2e7d32'
                                                }}
                                            >
                                                Fact #{index + 1}
                                            </Typography>
                                        </Box>
                                        <Typography 
                                            variant="body1" 
                                            sx={{ 
                                                fontFamily: 'Avenir',
                                                fontSize: '1.1rem',
                                                lineHeight: 1.6,
                                                color: '#333'
                                            }}
                                        >
                                            {item.fact}
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
                            🌟 Amazing, right? Nature is full of surprises! Keep exploring and learning about the wonderful world of plants! 🌟
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    )
}
