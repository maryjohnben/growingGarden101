import React from "react";
import {Box, Button, TextField} from "@mui/material";
import PropTypes from "prop-types";

export default function PlantSearchForm({
                                            plant,
                                            setPlant,
                                            HandleCancel,
                                            HandleSubmit
                                        }) {


    function handleChange(event) {
        const value = event.target.value;
        setPlant(value);
    }

    return(
        <Box component="form" onSubmit={HandleSubmit} sx={{ width: "100%", maxWidth: 400 }}>
            <TextField
                id="search"
                label="🔍 Search for your perfect plant..."
                variant="outlined"
                fullWidth
                sx={{ 
                    marginBottom: 3,
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        },
                        '&.Mui-focused': {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                        }
                    },
                    '& .MuiInputLabel-root': {
                        color: '#4caf50',
                        fontWeight: 'bold'
                    }
                }}
                value={plant}
                onChange={handleChange}
            />
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button 
                    sx={{ 
                        backgroundColor: "#4caf50",
                        borderRadius: 3,
                        padding: '12px 24px',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        fontSize: '1.1em',
                        boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
                        '&:hover': {
                            backgroundColor: "#45a049",
                            transform: 'translateY(-2px)',
                            boxShadow: '0 6px 16px rgba(76, 175, 80, 0.4)'
                        },
                        transition: 'all 0.3s ease'
                    }} 
                    type="submit" 
                    variant="contained" 
                    color="primary"
                >
                    🌱 Search Plants
                </Button>
                <Button 
                    sx={{ 
                        backgroundColor: "#ff9800",
                        borderRadius: 3,
                        padding: '12px 24px',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        fontSize: '1.1em',
                        boxShadow: '0 4px 12px rgba(255, 152, 0, 0.3)',
                        '&:hover': {
                            backgroundColor: "#f57c00",
                            transform: 'translateY(-2px)',
                            boxShadow: '0 6px 16px rgba(255, 152, 0, 0.4)'
                        },
                        transition: 'all 0.3s ease'
                    }} 
                    type="button" 
                    variant="contained" 
                    onClick={HandleCancel}
                >
                    🗑️ Clear
                </Button>
            </Box>
        </Box>
    )
}
PlantSearchForm.propTypes = {
  plant: PropTypes.string.isRequired,
  setPlant: PropTypes.func.isRequired,
  HandleSubmit: PropTypes.func.isRequired,
  HandleCancel: PropTypes.func.isRequired,
};