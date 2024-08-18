import { Link, useLocation } from "react-router-dom";
import s from "./Movies.module.css";

const Movies = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map((item) => (
        <li key={item.id} className={s.link}>
          <Link to={`/movies/${item.id.toString()}`} state={location}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Movies;
