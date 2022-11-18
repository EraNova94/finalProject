import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { movieContext } from "../../../Contexts/MovieContextProvider";
import "./AddMovies.css";

const AddMovies = () => {
  const { addMovie } = useContext(movieContext);
  const [genre, setGenre] = useState("");
  const [mainImg, setMainImg] = useState("");
  const [name, setName] = useState("");
  const [trailer, setTrailer] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState(0);

  function handleAdd(e) {
    if (
      !genre.trim() ||
      !mainImg.trim() ||
      !name.trim() ||
      !trailer.trim() ||
      !description.trim() ||
      !rating.trim() ||
      !price
    ) {
      alert("Заполните все поля!");
      return;
    }
    e.preventDefault();
    let obj = {
      genre,
      mainImg,
      name,
      trailer,
      description,
      rating,
      price,
    };
    addMovie(obj);
    setGenre("");
    setMainImg("");
    setName("");
    setTrailer("");
    setDescription("");
    setRating("");
    setPrice(0);
  }
  return (
    <>
      <h2 id="add-title">Add Movies</h2>
      <form id="form-add" onSubmit={e => handleAdd(e)}>
        <TextField
          className="outlined-basic"
          label="genre"
          variant="outlined"
          value={genre}
          onChange={e => setGenre(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="mainImg"
          variant="outlined"
          value={mainImg}
          onChange={e => setMainImg(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="name"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="trailer"
          variant="outlined"
          value={trailer}
          onChange={e => setTrailer(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="description"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="raiting"
          variant="outlined"
          value={rating}
          onChange={e => setRating(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          type="number"
          label="price"
          variant="outlined"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Добавить
        </Button>
      </form>
    </>
  );
};

export default AddMovies;
