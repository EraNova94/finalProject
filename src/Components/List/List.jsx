import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { movieContext } from "../../Contexts/MovieContextProvider";
import Pagination from "@mui/material/Pagination";
import "./List.css";
import { authContext } from "../../Contexts/AuthContextProvider";

const List = () => {
  const { readMovie, movies, searchMovie, filterMovie } =
    useContext(movieContext);
  const { user } = useContext(authContext);
  // console.log(user.email);
  const [searchVal, setSearchVal] = useState("");
  // console.log(searchVal);
  const [genre, setGenre] = useState("all");
  function handleVal() {
    searchMovie(searchVal);
    setSearchVal("");
  }

  useEffect(() => {
    if (genre === "all") {
      readMovie();
    } else {
      filterMovie(genre);
    }
  }, [genre]);

  useEffect(() => {
    readMovie();
  }, []);

  const [page, setPage] = useState(1);

  const itemLimit = 3;

  const count = Math.ceil(movies.length / itemLimit);
  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemLimit;
    const end = begin + itemLimit;
    return movies.slice(begin, end);
  }
  return (
    <Grid bgcolor="#000000" height="100%">
      <Container maxWidth="lg">
        <Box
          py="30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap">
          <Box display="flex" alignItems="center" gap="10px">
            <TextField
              sx={{
                backgroundColor: "rgb(240,248,255)",
                borderRadius: "12px",
              }}
              variant="filled"
              label="Поиск"
              size="small"
              color="error"
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
            />
            <SearchIcon
              color="error"
              fontSize="large"
              sx={{ cursor: "pointer" }}
              className="search-icon"
              onClick={searchVal ? handleVal : null}
            />
          </Box>
          {user.email === "era-nova@gmail.com" ? (
            <Link to="/add">
              <Button variant="contained" color="primary">
                ADD MOVIES
              </Button>
            </Link>
          ) : null}
          <Box>
            <FormControl
              sx={{
                backgroundColor: "teal",
                borderRadius: "12px",
                padding: "5px",
              }}
              size="medium"
              variant="filled">
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={genre}
                onChange={e => setGenre(e.target.value)}>
                <FormControlLabel value="all" control={<Radio />} label="ALL" />
                <FormControlLabel
                  value="comedy"
                  control={<Radio />}
                  label="COMEDY"
                />
                <FormControlLabel
                  value="fantasy"
                  control={<Radio />}
                  label="FANTASY"
                />
                <FormControlLabel
                  value="horror"
                  control={<Radio />}
                  label="Horror"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Grid
          className="cards"
          container
          py="20px"
          display="flex"
          justifyContent="space-around"
          gap="10px">
          {movies.length !== 0
            ? currentData().map(item => (
                <Box
                  border="2px solid white"
                  borderRadius="6px"
                  textAlign="center"
                  key={item.id}>
                  <img
                    src={item.mainImg}
                    alt={item.name}
                    width="100%"
                    height="300px"
                  />
                  <Box display="flex" flexDirection="column">
                    <span style={{ color: "white", padding: "10px 0 10px 0" }}>
                      {item.name}
                    </span>
                    <Link to={`/details/${item.id}`}>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{
                          fontFamily: "Quantico",
                          width: "40%",
                          margin: "0 auto 10px auto",
                        }}>
                        Trailer
                      </Button>
                    </Link>
                  </Box>
                </Box>
              ))
            : null}
        </Grid>
        <Box
          bgcolor="teal"
          width="30%"
          borderRadius="10px"
          margin="0 auto"
          border="3px solid white">
          <Pagination
            count={count}
            variant="outlined"
            color="error"
            page={page}
            shape="rounded"
            sx={{
              paddingBottom: "20px",
              paddingTop: "20px",
              width: "100%",
            }}
            onChange={handlePage}
          />
        </Box>
        <br />
      </Container>
    </Grid>
  );
};

export default List;
