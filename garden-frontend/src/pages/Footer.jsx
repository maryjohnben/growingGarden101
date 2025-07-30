import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#f5f5f5',
                padding: 3,
                marginTop: 'auto',
                textAlign: 'center',
                borderTop: '1px solid #e0e0e0'
            }}
        >
            <Typography variant="body2" color="text.secondary" gutterBottom>
                &copy; 2025 All Rights Reserved. Growing Garden.
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
                For any questions, contact: <Link href="mailto:marybenjamin713@gmail.com" color="primary">marybenjamin713@gmail.com</Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
                All AI rights belong to the respective AI Companies.
            </Typography>
        </Box>
    );
};