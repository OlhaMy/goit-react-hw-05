const MovieDetailsPage = () => {
  return (
    <div>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
