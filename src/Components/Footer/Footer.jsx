import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";
const Footer = () => {
  return (
    <Grid bgcolor="rgba(0,0,0,0.3)">
      <Container maxWidth="lg">
        <Grid className="footer">
          <Link>Questions? Contact us.</Link>
          <Box
            className="footer__side"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            paddingBottom="20px">
            <Box display="flex" flexDirection="column">
              <Link>FAQ</Link>
              <Link>Privacy</Link>
              <a href="https://fast.com/" rel="noreferrer" target="_blank">
                Speed Test
              </a>
            </Box>
            <Box
              width="20%"
              display="flex"
              justifyContent="space-between"
              className="social__icons">
              <PinterestIcon color="error" fontSize="large" />
              <FacebookIcon color="primary" fontSize="large" />
              <InstagramIcon color="error" fontSize="large" />
              <LinkedInIcon color="primary" fontSize="large" />
              <YouTubeIcon color="error" fontSize="large" />
            </Box>
            <Box display="flex" flexDirection="column">
              <Link>Corporate Information</Link>
              <Link>Terms of Use</Link>
              <Link>Contact Us</Link>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Footer;
