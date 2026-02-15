import React from "react";
import "../css/Favourites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Fav() {
  const { favourites } = useMovieContext();

  if (favourites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favourites</h2>
        <div className="moviesGrid">
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favEmpty">
      <h2>No favourite movies Yet</h2>
      <p>Start adding movies to your favourites and they will appear here</p>
    </div>
  );
}

export default Fav;
