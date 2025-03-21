import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Grid from '@mui/material/Grid2';
import {Box, Container, Typography} from "@mui/material";
import homePageLogo from "../images/homePagePicture.jpeg"
import PlantSearchForm from "./PlantSearchForm";
import axios from "axios";

const API_BASE_URL =
    import.meta.env.FLASK_APP_API_BASE_URL || "http://localhost:5000";

export const Home = () => {

    const [plant, setPlant] = useState("");
    const [plantData, setPlantData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); //not used yet
    const navigate = useNavigate();


// submit handler of PlantSearchForm.jsx
    //Does API calling to get plant results
    const HandleSubmit = async (event) => {
        event.preventDefault();
        //api call to get data from database or gemini
        setLoading(true);
        const trimmedPlant = plant.trim(); // Remove accidental spaces before making the API call
        // Do not make API call if the input is empty after trimming prevents unnecessary api calls
        if (trimmedPlant === "") return;
        try {
            const response =
                //get request sent
                await axios.get(`${API_BASE_URL}/search`,
                    {
                        params: {
                            query: trimmedPlant
                        }
                    });
            // results from api call saved
            setPlantData(response.data);
            console.log(response);
            // if error then set and results will be displayed in another page
            setError(null);
            navigate('/results', {state: {plantData: response.data}});
        } catch (error) {
            setError(error.response?.data?.message || error.message);
            setPlantData([]);
        } finally {
            setLoading(false);
        }
    }
// console.log(plantData[0]["Common Name"]);
// if(loading){
//      return <p>Loading...</p>;
// }


    const HandleCancel = () => {
        setPlant("");
        setPlantData([]);
        setError(null);
    }

  return (
    <Grid container
              justify="center"
              alignItems="center"
              direction="row"
              style={{minHeight: "100vh"}}
              spacing={5}
              marginTop={7}
        > {/* Ensures full-page width */}
      <Grid
        item
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
            {error && <div style={{ color: 'red' }}>{error}</div>}
          <Typography variant="h4" gutterBottom>
            Welcome to Growing Garden 101
          </Typography>
           <PlantSearchForm
            plant={plant}
            setPlant={setPlant}
            HandleSubmit={HandleSubmit}
            HandleCancel={HandleCancel}
           />
          <Typography variant="body1">
            Discover the best plants for your garden and learn how to take care of them.<p></p>
			    <font size="1">(*Note that search results may not be completely accurate due to the use of AI responses)</font>
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
              maxWidth: 500,
              height: "auto",
              borderRadius: "12px",
              boxShadow: 5,
              objectFit: "cover"
            }}
          />
        </Grid>
      </Grid>
    </Grid>

    );
};
