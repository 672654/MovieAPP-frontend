import { useCallback, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  searchMovies,
} from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Gjør fetchPopularMovies tilgjengelig for både useEffect og knapp
  const fetchPopularMovies = async () => {
    setLoading(true);
    try {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
      setError(null);
    } catch (error) {
      setError("Failed to fetch popular movies. Please try again later.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      setError("Failed to fetch search results. Please try again later.");
      console.log(error);
    } finally {
      setLoading(false);
    }
    setSearchQuery("");
  };

  const fetchTopRatedMovies = async () => {
    setLoading(true);
    try {
      const topRatedMovies = await getTopRatedMovies();
      setMovies(topRatedMovies);
      setError(null);
    } catch (error) {
      setError("Failed to fetch top rated movies. Please try again later.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const fetchUpcomingMovies = async () => {
    setLoading(true);
    try {
      const upcomingMovies = await getUpcomingMovies();
      setMovies(upcomingMovies);
      setError(null);
    } catch (error) {
      setError("Failed to fetch upcoming movies. Please try again later.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Eksempel på funksjon som mottar data fra et barn-komponent. Callback.
  const handleDataFromChild = useCallback((data) => {
    //alert(data);
    toast(data);
  }, []);

  return (
    <div className="home">
      <div className="request-buttons">
        <button onClick={fetchPopularMovies} className="popular-movies">
          Most Popular
        </button>
        <button onClick={fetchTopRatedMovies} className="top-rated-movies">
          Top Rated
        </button>
        <button onClick={fetchUpcomingMovies} className="upcoming-movies">
          Upcoming movies
        </button>
      </div>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <ToastContainer position="top-center" theme="dark" />
      {error && <div className="error">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              onSendData={handleDataFromChild}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
