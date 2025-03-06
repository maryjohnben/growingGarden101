import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Grid from '@mui/material/Grid2';
import TextField from "@mui/material/TextField";
import {Box, Card, CardContent, Container, Typography} from "@mui/material";
import homePageLogo from "../images/homePagePicture.jpeg"
import PlantSearchForm from "./PlantSearchForm";
import axios from "axios";

const API_BASE_URL =
  import.meta.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

export const Home = () => {

const [plant, setPlant] = useState("");
const [plantData, setPlantData] = useState([]);
const[error, setError] = useState(null);
const [loading, setLoading] = useState(false);
const navigate = useNavigate();

const HandleSubmit = async (event) => {
    event.preventDefault();
    //api call
    setLoading(true);
    const trimmedPlant = plant.trim(); // Remove accidental spaces before making the API call
  if (trimmedPlant === "") return; // Do not make API call if the input is empty after trimming
    try{
        const response =
            await axios.get(`${API_BASE_URL}/search`,
                {
                    params: {
                        query: trimmedPlant
                    }
                });
        setPlantData(response.data);
        console.log(response);
        setError(null);
    } catch (error) {
        setError(error);
        setPlantData([]);
    } finally {
        setLoading(false);
    }
    }
// console.log(plantData[0]["Common Name"]);
// if(loading){
//      return <p>Loading...</p>;
// }


if (error){
    return <p>Error: {error.message}</p>;
}



const HandleCancel = () => {
    setPlant("");
    setPlantData([]);
    setError(null);
}

  return (
    <Container maxWidth="xl"> {/* Ensures full-page width */}
      <Grid
        container
        spacing={30}
        minHeight="100vh"
        alignItems="center"
        justifyContent="space-between"
        padding={4}
      >
        {/* Left Section: Search Box & Text */}
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          paddingLeft={4} /* Keeps content from touching the left edge */
        >
          <Typography variant="h4" gutterBottom>
            Welcome to Grow Garden 101
          </Typography>
           <PlantSearchForm
            plant={plant}
            setPlant={setPlant}
            HandleSubmit={HandleSubmit}
            HandleCancel={HandleCancel}
           />
          <Typography variant="body1">
            Discover the best plants for your garden and learn how to take care of them.
          </Typography>
        </Grid>

        {/* Right Section: Image */}
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="flex-end"
          paddingRight={4} /* Keeps image from touching the right edge */
        >
          <Box
            component="img"
            src={homePageLogo}
            alt="Garden"
            sx={{
              width: "100%",
              maxWidth: 550,
              height: "auto",
              borderRadius: "12px",
              boxShadow: 5,
              objectFit: "cover"
            }}
          />
        </Grid>
      </Grid>
        {/* Display API Response */}
      {plantData.length > 0 && (
        <Box>
          {plantData.map((plant, index) => (
            <Card key={index} sx={{ marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h6">{plant["Common Name"]}</Typography>
                <Typography variant="body1"><strong>Scientific Name:</strong> {plant["Scientific Name"]}</Typography>
                <Typography variant="body1"><strong>Soil pH:</strong> {plant["Soil ph"]}</Typography>
                <Typography variant="body1"><strong>Sun Requirements:</strong> {plant["Sun"]}</Typography>
                <Typography variant="body1"><strong>Watering:</strong> {plant["Watering"]}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Container>

  );
};
