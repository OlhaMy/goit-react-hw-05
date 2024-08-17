import { moviesDetails } from "../../services/moviesAPI.js";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await moviesDetails(movieId);
        setDetails(data);
      } catch (error) {
        console.error("Failed to fetch movie details", error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!details) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`}
        alt={details.title}
      />
      <h2>{details.title}</h2>
      <p>User Score: {details.vote_average.toFixed(1)}</p>
      <p> Overview {details.overview}</p>
      <p> Genres {details.genres.map((genre) => genre.name).join(" ")}</p>
      <h2>Additional information</h2>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
