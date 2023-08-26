import Head from "next/head";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Create watch parties from your YouTube library"
        />
      </Head>
      <Box>
        <Typography variant="h4" color="primary">
          Privacy Policy
        </Typography>

        <Typography variant="h5" color="primary">
          Introduction
        </Typography>
        <Typography variant="body1" color="primary">
          Thank you for using our app &apos;watchpartyyoutube.&apos; This
          Privacy Policy explains how we collect, use, and protect your
          information.
        </Typography>
        <Typography variant="h5" color="primary">
          Information Collection
        </Typography>
        <Typography variant="body1" color="primary">
          We collect various types of information to provide and improve our
          watch party services:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" color="primary">
              Personal Information: Names, email addresses of YouTubers who sign
              up.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="primary">
              Usage Data: Information about app interactions.
            </Typography>
          </li>
        </ul>

        <Typography variant="h5" color="primary">
          Changes to Privacy Policy
        </Typography>
        <Typography variant="body1" color="primary">
          We may update our Privacy Policy to reflect changes in our practices.
          We will notify you of any significant changes.
        </Typography>

        <Typography variant="h5" color="primary">
          Contact Us
        </Typography>
        <Typography variant="body1" color="primary">
          If you have any questions about our Privacy Policy, you can contact us
          at team@watchpartyyoutube.com
        </Typography>
      </Box>
    </>
  );
}
