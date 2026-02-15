import { createContext, useContext, useState, useEffect } from "react";

const movieContext = createContext();

export const useMovieContext = () => useContext(movieContext);

export const MovieContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    const storedFav = localStorage.getItem("favourites");
    return storedFav ? JSON.parse(storedFav) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFav = (movie) => {
    setFavourites((prev) => [...prev, movie]);
  };

  const removeFromFav = (movieId) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFav = (movieId) => {
    return favourites.some((movie) => movie.id === movieId);
  };

  const value = {
    favourites,
    addToFav,
    removeFromFav,
    isFav,
  };

  return (
    <movieContext.Provider value={value}>{children}</movieContext.Provider>
  );
};
