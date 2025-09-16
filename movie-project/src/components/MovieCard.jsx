import { useState } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/MovieCard.css";

function MovieCard({ movie }) {
  const [showOverview, setShowOverview] = useState(false);
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavouriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  function onOverview() {
    setShowOverview((prev) => !prev);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`fav-btn ${favorite ? "active" : ""}`}
            onClick={onFavouriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <div className="movie-title-row">
          <h3>{movie.title}</h3>
          <button className="overview-btn" onClick={onOverview}>
            Overview
          </button>
        </div>
        {showOverview && (
          <div className="movie-overview">
            <p>{movie.overview}</p>
          </div>
        )}
        <p>Rating: {movie.vote_average}</p>
        <p>Release Date: {movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
