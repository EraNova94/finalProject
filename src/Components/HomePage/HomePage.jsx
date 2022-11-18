import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import "./HomePage.css";
import video2 from "../media/video2.mp4";
import videoHomePage from "../media/videoHomePage.m4v";
import imgHomePage from "../media/imgHomePage.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Grid className="home__main">
      <video src={video2} autoPlay loop muted id="bg__video"></video>
      <Container maxWidth="lg">
        <Grid width="100%">
          <Box
            margin="30px auto 0px auto"
            width="50%"
            color="white"
            display="flex"
            flexDirection="column"
            alignItems="center">
            <h1 style={{ fontSize: "24px", textAlign: "center" }}>
              WELCOME TO ONLINE TV
            </h1>
            <Link to="/list">
              <Button
                variant="contained"
                color="error"
                sx={{
                  width: "100%",
                  fontSize: "16px",
                  fontFamily: "Quantico",
                }}>
                GET STARTED
              </Button>
            </Link>
          </Box>
          <Box
            className="home__page-promo"
            mt="40px"
            width="100%"
            color="white"
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
            flexWrap="wrap">
            <Box width="40%">
              <video
                src={videoHomePage}
                autoPlay
                loop
                muted
                style={{ width: "100%", borderRadius: "12px" }}></video>
            </Box>
            <Box className="home__page-promo-title" width="50%" fontSize="22px">
              <h2>Enjoy on your TV.</h2>
              <h3>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </h3>
            </Box>
          </Box>
          <Box
            className="for__kids"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            color="white"
            mt="30px"
            mb="20px">
            <Box width="40%" fontSize="22px">
              <h2>Create profiles for kids.</h2>
              <h3>
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </h3>
            </Box>
            <img
              src={imgHomePage}
              alt="homePageImage"
              style={{ width: "40%", borderRadius: "12px" }}
            />
          </Box>
        </Grid>
      </Container>
      <hr color="teal" />
    </Grid>
  );
};

export default HomePage;
