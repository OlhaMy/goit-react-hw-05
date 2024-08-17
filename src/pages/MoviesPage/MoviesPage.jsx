import { useEffect, useState } from "react";
import { searchMovies } from "../../services/moviesAPI";
import { NavLink } from "react-router-dom";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (query.trim() === "") return;

    try {
      const result = await searchMovies(query);
      setMovies(result);
    } catch (error) {
      console.error("Failed to fetch movies", error);
    }
  };

  return (
    <div>
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

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
