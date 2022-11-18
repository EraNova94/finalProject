import { Box, Button, Container, Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import { useNavigate, useParams } from "react-router-dom";
import { authContext } from "../../Contexts/AuthContextProvider";
import { movieContext } from "../../Contexts/MovieContextProvider";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { readOneMovie, oneMovie, deleteMovie } = useContext(movieContext);
  const { user } = useContext(authContext);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    readOneMovie(id);
  }, [id, oneMovie]);

  return (
    <>
      {oneMovie ? (
        <Grid bgcolor="black" color="white" height="100vh">
          <Container maxWidth="lg">
            <Box
              className="detail__card"
              pt="50px"
              display="flex"
              justifyContent="space-evenly"
              alignItems="center">
              <Box width="40%">
                <h3 style={{ marginTop: "0" }}>{oneMovie.name}</h3>
                <p>{oneMovie.description}</p>
                <Box
                  width="15%"
                  display="flex"
                  flexDirection="column"
                  gap="5px">
                  <span>{oneMovie.rating}</span>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ fontFamily: "Quantico", cursor: "pointer" }}>
                    BUY
                  </Button>
                </Box>
              </Box>
              <Box width="40%">
                <ReactPlayer
                  url={oneMovie.trailer}
                  width="100%"
                  controls={true}
                />
              </Box>
            </Box>
            <h2 style={{ textAlign: "center" }}>FULL HD</h2>
            <h2
              style={{
                textAlign: "center",
              }}>{`ONLY FOR ${oneMovie.price} USD`}</h2>
            <h2 style={{ textAlign: "center" }}>PLEASANT VIEWING</h2>
            {user.email === "era-nova@gmail.com" ? (
              <Box
                py="30px"
                margin="0 auto"
                width="60%"
                display="flex"
                justifyContent="space-evenly">
                <Button
                  variant="contained"
                  color="info"
                  sx={{ width: "40%" }}
                  onClick={() => navigate(`/edit/${oneMovie.id}`)}>
                  EDIT
                </Button>
                <Button
                  variant="contained"
                  color="info"
                  sx={{ width: "40%" }}
                  onClick={() => deleteMovie(oneMovie.id)}>
                  DELETE
                </Button>
              </Box>
            ) : null}
          </Container>
        </Grid>
      ) : null}
    </>
  );
};

export default MovieDetails;
