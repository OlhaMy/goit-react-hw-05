import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => clsx(s.link, isActive && s.active);
  return (
    <>
      <header className={s.header}>
        <nav>
          <ul className={s.list}>
            <li>
              <NavLink to="/" className={buildLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={buildLinkClass}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <NavLink to="/movies/:movieId">MovieDetailsPage</NavLink>
    </>
  );
};

export default Navigation;
