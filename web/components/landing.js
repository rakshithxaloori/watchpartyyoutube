import React from "react";

import { Box, Typography, Button } from "@mui/material";

export default function LandingPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Typography variant="h2" color="text.primary" gutterBottom>
        Welcome to YouTube Watch Party
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Create watch parties for your audience from your YouTube library!
      </Typography>
      <Button variant="outlined" color="primary">
        Get Started
      </Button>
    </Box>
  );
}
