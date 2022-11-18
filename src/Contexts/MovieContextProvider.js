import React, { createContext, useReducer } from "react";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import fire from "../fire";
import { useNavigate } from "react-router-dom";

export const movieContext = createContext();

const INIT_STATE = {
  movies: [],
  oneMovie: null,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...prevState,
        movies: action.payload,
      };
    case "GET_ONE_MOVIE":
      return { ...prevState, oneMovie: action.payload };

    default:
      return prevState;
  }
}

const MovieContextProvider = ({ children }) => {
  const db = getFirestore(fire);

  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  //? create
  async function addMovie(newProduct) {
    try {
      await addDoc(collection(db, "movies"), newProduct);
    } catch (error) {
      console.error(error);
    }
  }

  //? read

  async function readMovie() {
    try {
      const { docs } = await getDocs(collection(db, "movies"));
      // console.log(docs);
      const data = docs.map(item => {
        return { ...item.data(), id: item.id };
      });
      // console.log(data);
      dispatch({
        type: "GET_MOVIES",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function readOneMovie(id) {
    try {
      const oneDoc = doc(db, "movies", id);
      const data = await getDoc(oneDoc);
      let obj = { ...data.data(), id: data.id };
      dispatch({
        type: "GET_ONE_MOVIE",
        payload: obj,
      });
    } catch (error) {
      console.error(error);
    }
  }

  //? Edit

  async function editMovie(id, editedMovie) {
    try {
      let oneDoc = doc(db, "movies", id);
      console.log(oneDoc);
      await updateDoc(oneDoc, editedMovie);
      readMovie();
      navigate(`/details/${id}`);
    } catch (error) {
      console.error(error);
    }
  }

  //? delete

  async function deleteMovie(id) {
    try {
      let oneDoc = doc(db, "movies", id);
      await deleteDoc(oneDoc);
      readMovie();
      navigate("/list");
    } catch (error) {
      console.error(error);
    }
  }

  //? search

  async function searchMovie(searchVal) {
    // console.log(searchVal);
    if (searchVal.length > 0) {
      let searchValue = searchVal.toLowerCase();
      const { docs } = await getDocs(collection(db, "movies"));
      const data = docs.map(item => {
        return { ...item.data(), id: item.id };
      });
      let filteredData = data.filter(elem => {
        return (
          elem.name
            .toLowerCase()
            .slice(0, searchValue.length)
            .indexOf(searchValue) !== -1
        );
      });
      // console.log(filteredData);
      dispatch({
        type: "GET_MOVIES",
        payload: filteredData,
      });
      searchVal = "";
    } else {
      const filteredData = null;
      dispatch({
        type: "GET_MOVIES",
        payload: filteredData,
      });
    }
  }

  //? filter

  async function filterMovie(genre) {
    try {
      const { docs } = await getDocs(collection(db, "movies"));
      // console.log(docs);
      const data = docs.map(item => {
        return { ...item.data(), id: item.id };
      });
      const filteredMovie = data.filter(filMovie => {
        return filMovie.genre === genre;
      });
      dispatch({
        type: "GET_MOVIES",
        payload: filteredMovie,
      });
    } catch (error) {
      console.error(error);
    }
  }

  let cloud = {
    addMovie,
    readMovie,
    editMovie,
    readOneMovie,
    deleteMovie,
    searchMovie,
    filterMovie,
    movies: state.movies,
    oneMovie: state.oneMovie,
    searchMovies: state.searchMovies,
    filteredMovie: state.filteredMovie,
  };
  return (
    <movieContext.Provider value={cloud}>{children}</movieContext.Provider>
  );
};

export default MovieContextProvider;
