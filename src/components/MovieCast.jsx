import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { moviesCast } from "../services/moviesAPI";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const data = await moviesCast(movieId);
        setCast(data);
      } catch (error) {
        console.error("Failed to fetch movie details", error);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  if (!cast) return;

  return (
    <div>
      <ul>
        {cast.map((item) => (
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name}
            />
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
