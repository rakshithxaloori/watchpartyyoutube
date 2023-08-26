import Head from "next/head";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import LandingPage from "@/components/landing";

export default function Home() {
  return <LandingPage />;
  return (
    <>
      <Head>
        <title>watchpartyyoutube</title>
        <meta
          name="description"
          content="Create watch parties from your YouTube library"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h3" color="primary">
          Welcome to watchpartyyoutube
        </Typography>
        <Typography variant="body1" color="primary">
          Create watch parties from your YouTube library
        </Typography>
      </Box>
    </>
  );
}
