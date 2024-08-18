import { useState } from "react";
import { searchMovies } from "../../services/moviesAPI";
import { NavLink, useLocation } from "react-router-dom";
import Movies from "../../components/Navigation/Movies";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (query.trim() === "") return;

    try {
      const result = await searchMovies(query);
      setMovies(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {location.pathname === "/movies" && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="movies"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      )}
      {movies.length > 0 && <Movies movies={movies} />}
    </div>
  );
};

export default MoviesPage;
