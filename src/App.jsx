import { Routes, Route, NavLink } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import s from "./App.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const App = () => {
  return (
    <div>
      <nav className={s.nav}>
        <NavLink to="/" className={buildLinkClass}>
          HomePage
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          MoviesPage
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
