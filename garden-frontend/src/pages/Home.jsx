import React, {useState} from "react";
import Grid from '@mui/material/Grid2';
import TextField from "@mui/material/TextField";
import {Box, Container, Typography} from "@mui/material";
import homePageLogo from "../images/homePagePicture.jpeg"


export const Home = () => {
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
          <TextField
            id="search"
            label="Search Plants..."
            variant="outlined"
            fullWidth
            sx={{ maxWidth: 400, marginBottom: 2 }}
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
    </Container>
  );
};
