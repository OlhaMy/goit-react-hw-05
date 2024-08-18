import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { moviesDetails } from "../../services/moviesAPI";
import { IoPlayBackSharp } from "react-icons/io5";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [details, setDetails] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await moviesDetails(movieId);
        if (!data) {
          throw new Error("Movie not found");
        }
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
      <Link to={goBackRef.current}>
        <IoPlayBackSharp /> Go Back
      </Link>
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
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
