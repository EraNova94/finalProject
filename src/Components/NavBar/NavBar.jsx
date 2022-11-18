import { Box, Button, Grid } from "@mui/material";
import React, { useContext } from "react";
import logo1 from "../media/logo1.svg";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { authContext } from "../../Contexts/AuthContextProvider";
import "./NavBar.css";
const NavBar = () => {
  const { user, handleLogOut } = useContext(authContext);
  // console.log(user);
  return (
    <Grid bgcolor="tomato" py="15px">
      <Container maxWidth="lg">
        <Grid display="flex">
          <Grid
            width="30%"
            display="flex"
            justifyContent="space-evenly"
            alignItems="center">
            <Box width="30%" className="main__logo">
              <Link to="/">
                <img src={logo1} alt="logo" style={{ width: "100%" }} />
              </Link>
            </Box>
            <Box className="logo__title">
              <span
                style={{
                  fontSize: "20px",
                }}>
                ONLINE TV
              </span>
            </Box>
          </Grid>
          <Grid width="70%" display="flex" className="navbar__right">
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-evenly">
              <Link className="nav__link" to="/list">
                Movie List
              </Link>
              <Link to="comments" className="nav__link">
                Reviews
              </Link>
              <Link className="nav__link">FAQ</Link>
              {user.email ? (
                <Link to="/" className="nav__acc">
                  {user.email}
                </Link>
              ) : (
                <Link to="/auth">
                  <Button
                    className="navbar__btns"
                    id="signup__btn"
                    variant="contained"
                    color="primary"
                    sx={{ color: "white", fontFamily: "Quantico" }}>
                    Sign up
                  </Button>
                </Link>
              )}
              <Button
                className="navbar__btns"
                id="btn__logout"
                variant="contained"
                color="primary"
                sx={{ color: "white", fontFamily: "Quantico" }}
                onClick={handleLogOut}>
                LOG OUT
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default NavBar;
