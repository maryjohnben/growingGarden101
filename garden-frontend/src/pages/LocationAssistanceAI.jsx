import React, {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Box, Button, Card, CardContent, Container, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";

//plant care info from AI displayed here
export const LocationAssistanceAI = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const selectedPlant = location.state?.selectedPlant || {}; //passed as objects
    const AI_PlantCareInfo = location.state?.AI_PlantCareInfo || {};

    // console.log("in location", AI_PlantCareInfo["Common Name"]);
    // console.log("in location general", AI_PlantCareInfo);

    // useEffect(() => {
    //     console.log("Selected Plant:", selectedPlant);
    //     console.log("AI Plant Care Info:", AI_PlantCareInfo);
    // }, [selectedPlant, AI_PlantCareInfo]);

    if (!AI_PlantCareInfo) {
        // error will be caught and displayed in PlantResults before getting to this page but just as a safe option
        return (
            <Container maxWidth="xl">
                <Typography variant="h4" gutterBottom>
                    Plant Care Assistance
                </Typography>
                <Typography variant="body1">No plant care instructions available. Please try again at a later
                    time.</Typography>
                <Button variant="outlined" color="secondary" onClick={() => navigate(-1)}>
                    Go Back
                </Button>
            </Container>
        );
    }


    return (
        <Grid container
              justify="center"
              alignItems="center"
              direction="column"
              style={{minHeight: "100vh"}}
              spacing={5}
              marginTop={7}
        >
            <Grid item>
                <Typography variant="h4" color="green"
                            marginBottom={-2}>
                    Plant Care Assistance
                </Typography>
            </Grid>

            <Grid container
                  direction="column"
                  alignItems="center"
                  justify="center"
                  marginLeft={5}
                  marginRight={5}
            >

                <Card sx={{marginBottom: 2}}>
                    <CardContent>
                        <Typography variant="h6">Detailed AI-Assisted Location Based Plant Care Instructions
                            for {AI_PlantCareInfo["Common Name"].split(",")[0]}</Typography>
                        <Typography variant="body1"><strong>Common Name:</strong> {AI_PlantCareInfo["Common Name"]}
                        </Typography>
                        <Typography variant="body1"><strong>Scientific
                            Name:</strong> {AI_PlantCareInfo["Scientific Name"]}</Typography>
                        <Typography variant="body1"><strong>Soil Type:</strong> {AI_PlantCareInfo["Soil Type"]}
                        </Typography>
                        <Typography variant="body1"><strong>Soil pH:</strong> {AI_PlantCareInfo["Soil pH"]}</Typography>
                        <Typography variant="body1"><strong>Sun:</strong> {AI_PlantCareInfo["Sun"]}</Typography>
                        <Typography variant="body1"><strong>Time to plant:</strong> {AI_PlantCareInfo["Time to plant"]}
                        </Typography>
                        <Typography variant="body1"><strong>Time to water:</strong> {AI_PlantCareInfo["Time to water"]}
                        </Typography>
                        <Typography variant="body1"><strong>Watering:</strong> {AI_PlantCareInfo["Watering"]}
                        </Typography>
                        <Typography variant="body1"><strong>Fertilizing:</strong> {AI_PlantCareInfo["Fertilizing"]}
                        </Typography>
                         <Box display="flex" justifyContent="center">
                        <Card sx={{width: 1 / 4}}>
                            <CardContent>
                                <Typography variant="body1"><strong>Current Weather</strong></Typography>
                                <Typography variant="body2">
                                    <strong>Conditions:</strong> {AI_PlantCareInfo["Current Weather"]?.Conditions}<br/>
                                    <strong>Humidity:</strong> {AI_PlantCareInfo["Current Weather"]?.Humidity}<br/>
                                    <strong>Temperature:</strong> {AI_PlantCareInfo["Current Weather"]?.Temperature}<br/>
                                    <strong>Wind Speed:</strong> {AI_PlantCareInfo["Current Weather"]?.["Wind"]}
                                </Typography>
                            </CardContent>
                        </Card>
                         </Box>
                        <Card>
                            <CardContent>
                                <Typography variant="body1">
                                    <strong>Weather based
                                        recommendations:</strong> {JSON.stringify(AI_PlantCareInfo["Weather based recommendations"], null, 2)}
                                </Typography>
                            </CardContent>
                        </Card>


                    </CardContent>
                </Card>
                <Box textAlign="center" marginBottom={6}>
                    <Button sx={{backgroundColor: "green", marginRight: 2}} variant="contained" color="primary"
                            onClick={() => navigate("/")}>
                        Search Another Plant
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={() => navigate(-1)}>
                        Go Back
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}
