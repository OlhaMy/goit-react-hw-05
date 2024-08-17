import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Додано імпорт useParams
import { moviesCast } from "../services/moviesAPI";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await moviesCast(movieId);
        setCast(data.cast); // Залежно від структури API може знадобитися доступ до data.cast
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map((item) => (
          <li key={item.id}>
            {item.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={item.name}
              />
            )}
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
