import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import Navigation from "./components/Navigation/Navigation";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./components/MovieCast";
import MovieReviews from "./components/MovieReviews";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />}>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
