import React from "react";
import { Route, Routes } from "react-router-dom";
import AddMovies from "./Components/Admin/AddMovies/AddMovies";
import EditMovies from "./Components/Admin/EditMovies/EditMovies";
import HomePage from "./Components/HomePage/HomePage";
import List from "./Components/List/List";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import Auth from "./Components/Auth/Auth";
import Comments from "./Components/Comments/Comments";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/list" element={<List />} />
      <Route path="/details/:id" element={<MovieDetails />} />
      <Route path="/comments" element={<Comments />} />
      <Route path="/add" element={<AddMovies />} />
      <Route path="/edit/:id" element={<EditMovies />} />
    </Routes>
  );
};

export default MainRoutes;
