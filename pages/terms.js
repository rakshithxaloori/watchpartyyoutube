import Head from "next/head";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Create watch parties from your YouTube library"
        />
      </Head>
      <Box p={3}>
        <Typography variant="h4" color="primary">
          Terms of Service
        </Typography>
        <Typography variant="body1" color="primary">
          Welcome to watchpartyyoutube! These terms of service outline the rules
          and regulations for the use of our app.
        </Typography>
        <Typography variant="h5" color="primary">
          Acceptance of Terms
        </Typography>
        <Typography variant="body1" color="primary">
          By accessing or using watchpartyyoutube, you agree to be bound by
          these terms.
        </Typography>
        <Typography variant="h5" color="primary">
          User Responsibilities
        </Typography>
        <Typography variant="body1" color="primary">
          You are responsible for your actions and content while using the app.
        </Typography>
        <Typography variant="h5" color="primary">
          Contact Us
        </Typography>
        <Typography variant="body1" color="primary">
          If you have any questions about these terms, please contact us at
          team@watchpartyyoutube.com
        </Typography>
      </Box>
    </>
  );
};

export default TermsOfService;
