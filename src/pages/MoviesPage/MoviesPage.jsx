import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const MoviesPage = () => {
  const movieId = 1; // Beispiel-ID, könnte dynamisch sein

  return (
    <div>
      <NavLink to={`/movies/${movieId}`}>Film Details</NavLink>

      <Outlet />
    </div>
  );
};

export default MoviesPage;
