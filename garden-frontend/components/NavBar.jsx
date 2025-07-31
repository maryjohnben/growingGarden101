import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { NavLink } from "react-router-dom";
import logo from "../src/images/logo.jpeg";

export default function NavBar() {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)',
        boxShadow: '0 4px 20px rgba(76, 175, 80, 0.3)',
        borderBottom: '2px solid #2e7d32'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo and Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              component="img"
              src={logo}
              alt="Garden 101 Logo"
              sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                border: '3px solid #ffffff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)'
                }
              }}
            />
            <Typography 
              variant="h5" 
              component={NavLink} 
              to="/"
              sx={{ 
                color: '#ffffff',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontFamily: 'cursive',
                '&:hover': {
                  color: '#e8f5e8'
                }
              }}
            >
              🌱 Growing Garden 101
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {[
              { path: '/', label: '🏠 Home' },
              { path: '/easyPlants', label: '🌿 Easy Plants' },
              { path: '/funFacts', label: '🤔 Fun Facts' },
              { path: '/about', label: 'ℹ️ About' }
            ].map((item) => (
              <Button
                key={item.path}
                component={NavLink}
                to={item.path}
                sx={{
                  color: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                  px: 3,
                  py: 1,
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  border: '2px solid transparent',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderColor: '#ffffff',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 16px rgba(255, 255, 255, 0.3)'
                  },
                  '&.active': {
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    borderColor: '#ffffff',
                    boxShadow: '0 4px 12px rgba(255, 255, 255, 0.4)'
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
