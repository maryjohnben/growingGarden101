import React from "react";
import {Box, Button} from "@mui/material";
import TextField from "@mui/material/TextField";
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
        label="Search Plants..."
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
        value={plant}
        onChange={handleChange}
      />
      <Button sx={{ backgroundColor: "green" }} type="submit" variant="contained" color="primary">
        Search
      </Button><Button sx={{ marginLeft: 2, backgroundColor: "green"}} type="button" variant="contained" color="primary" onClick={HandleCancel}>
        Cancel
      </Button>
    </Box>
    )
}
PlantSearchForm.propTypes = {
  plant: PropTypes.string.isRequired,
  setPlant: PropTypes.func.isRequired,
  HandleSubmit: PropTypes.func.isRequired,
  HandleCancel: PropTypes.func.isRequired,
};