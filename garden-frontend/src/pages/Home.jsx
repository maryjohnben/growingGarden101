import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import axios from "axios";

import homePageLogo from "../images/homePagePicture.jpeg";
import PlantSearchForm from "./PlantSearchForm";

const API_BASE_URL =
  import.meta.env.VITE_FLASK_APP_API_BASE_URL || "http://localhost:5000";

export const Home = () => {
  const [plant, setPlant] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  /* ----------------------------- handlers ----------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = plant.trim();
    if (!query) return;

    setLoading(true);
    try {
      const { data } = await axios.get(`${API_BASE_URL}/search`, {
        params: { query },
      });
      navigate("/results", { state: { plantData: data } });
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message ?? err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setPlant("");
    setError(null);
  };

  /* ----------------------------- UI ----------------------------- */
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg,#e8f5e8 0%,#f0f8f0 100%)",
        minHeight: "100vh",
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Paper elevation={4} sx={{ p: { xs: 3, md: 6 }, borderRadius: 4 }}>
          <Grid
            container
            spacing={4}
            sx={{
              flexDirection: { xs: "column", md: "row" },
              flexWrap: { md: "nowrap" },
              alignItems: "flex-start",
            }}
          >
            {/* ── LEFT : text + search ─────────────────────────── */}
            <Grid xs={12} md={6}>
              <Box sx={{ maxWidth: 520, mx: { md: 0 } }}>
                {error && (
                  <Box
                    sx={{
                      mb: 3,
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "error.light",
                      color: "error.main",
                      fontWeight: 500,
                    }}
                  >
                    {error}
                  </Box>
                )}

                <Typography
                  variant="h3"
                  component="h1"
                  fontWeight="bold"
                  color="success.dark"
                  mb={2}
                >
                  🌱 Welcome to Growing Garden 101
                </Typography>

                <Typography variant="subtitle1" mb={3} color="text.secondary">
                  Find the perfect plants and learn how to help them thrive.
                </Typography>

                <PlantSearchForm
                  plant={plant}
                  setPlant={setPlant}
                  HandleSubmit={handleSubmit}
                  HandleCancel={handleCancel}
                  loading={loading}
                />

                <Typography variant="caption" display="block" mt={3} color="text.secondary" fontStyle="italic">
                  Results are generated with AI—double‑check before planting!
                </Typography>
              </Box>
            </Grid>

            {/* ── RIGHT : hero image ───────────────────────────── */}
            <Grid xs={12} md={6}>
              <Box
                component="img"
                src={homePageLogo}
                alt="Garden with various plants"
                sx={{
                  width: "90%",
                  maxWidth: 420,
                  borderRadius: 3,
                  boxShadow: 3,
                  display: "block",
                  ml: { md: "auto" },
                  mr: { md: 0 },
                  mx: { xs: "auto" },
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;
