import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { movieContext } from "../../../Contexts/MovieContextProvider";

const EditMovies = () => {
  const { editMovie, readOneMovie, oneMovie } = useContext(movieContext);
  console.log(oneMovie);
  const [inpVal, setInpVal] = useState(oneMovie);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setInpVal(oneMovie);
  }, [oneMovie]);
  useEffect(() => {
    readOneMovie(id);
  }, [id]);
  function handleChange(e) {
    let obj = {
      ...inpVal,
      [e.target.name]: e.target.value,
    };
    setInpVal(obj);
  }
  function handleSave(e) {
    e.preventDefault();
    if (
      !inpVal.genre.trim() ||
      !inpVal.mainImg.trim() ||
      !inpVal.name.trim() ||
      !inpVal.trailer.trim() ||
      !inpVal.description.trim() ||
      !inpVal.rating.trim() ||
      !inpVal.price
    ) {
      alert("Заполните все поля!");
      return;
    }
    editMovie(id, inpVal);
    navigate("/list");
  }
  return (
    <>
      {inpVal ? (
        <>
          <h2 id="add-title">Edit Movies</h2>
          <form id="form-add" onSubmit={e => handleSave(e)}>
            <TextField
              className="outlined-basic"
              label="genre"
              name="genre"
              variant="outlined"
              value={inpVal.genre}
              onChange={e => handleChange(e)}
            />
            <TextField
              className="outlined-basic"
              label="mainImg"
              name="mainImg"
              variant="outlined"
              value={inpVal.mainImg}
              onChange={e => handleChange(e)}
            />
            <TextField
              className="outlined-basic"
              label="name"
              name="name"
              variant="outlined"
              value={inpVal.name}
              onChange={e => handleChange(e)}
            />
            <TextField
              className="outlined-basic"
              label="trailer"
              name="trailer"
              variant="outlined"
              value={inpVal.trailer}
              onChange={e => handleChange(e)}
            />
            <TextField
              className="outlined-basic"
              label="description"
              name="description"
              variant="outlined"
              value={inpVal.description}
              onChange={e => handleChange(e)}
            />
            <TextField
              className="outlined-basic"
              label="rating"
              name="rating"
              variant="outlined"
              value={inpVal.rating}
              onChange={e => handleChange(e)}
            />
            <TextField
              className="outlined-basic"
              type="number"
              label="price"
              name="price"
              variant="outlined"
              value={inpVal.price}
              onChange={e => handleChange(e)}
            />
            <Button variant="contained" type="submit">
              Save
            </Button>
          </form>
        </>
      ) : null}
    </>
  );
};

export default EditMovies;
