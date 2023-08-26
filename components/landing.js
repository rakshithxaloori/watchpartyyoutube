import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../utils/theme";
import { Box, Typography, Button } from "@mui/material";

export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="background.default"
      >
        <Typography variant="h2" color="text.primary" gutterBottom>
          Welcome to YouTube Watch Party
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Create and join watch parties with your favorite YouTubers!
        </Typography>
        <Button variant="outlined" color="primary">
          Get Started
        </Button>
      </Box>
    </ThemeProvider>
  );
}
