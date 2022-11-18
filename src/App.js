import React from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import AuthContextProvider from "./Contexts/AuthContextProvider";
import CommentsContextProvider from "./Contexts/CommentsContextProvider";
import MovieContextProvider from "./Contexts/MovieContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <AuthContextProvider>
      <CommentsContextProvider>
        <MovieContextProvider>
          <NavBar />
          <MainRoutes />
          <Footer />
        </MovieContextProvider>
      </CommentsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
