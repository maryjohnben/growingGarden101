import React from "react";
import {Box, Button} from "@mui/material";
import TextField from "@mui/material/TextField";

export default function PlantSearchForm({
                                            plant,
                                            setPlant,
                                            handleCancel,
                                            handleSubmit
                                        }) {


    function handleChange(event) {
        const value = event.target.value;
        setPlant(value);
    }

    return(
          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%", maxWidth: 400 }}>
      <TextField
        id="search"
        label="Search Plants..."
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
        value={plant}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </Box>
  )
}