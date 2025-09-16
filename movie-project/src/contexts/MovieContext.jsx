import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

//Brukes i Favorites.jsx og MovieCard.jsx
export const useMovieContext = () => useContext(MovieContext);

//Brukes i App.jsx
export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Hent favoritter fra localStorage ved initialisering
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);

  // Lagre favoritter i localStorage når de endres
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Funksjoner for å legge til, fjerne og sjekke favoritter
  const addToFavorites = (movie) => {
    setFavorites((prevFavs) => {
      return [...prevFavs, movie];
    });
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prevFavs) => {
      return prevFavs.filter((movie) => movie.id !== movieId);
    });
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
