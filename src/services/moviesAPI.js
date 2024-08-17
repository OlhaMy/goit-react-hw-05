import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzJkYzU2MTQ1YmVlYTcyZTdkNWIzMmNlODJmNzRhNyIsIm5iZiI6MTcyMzkxNjA1My44NjcyNDMsInN1YiI6IjY2YmQwMDg1ODk5ZGZhYmE2NjliNTdhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xkMXB9-oXWjsl9HlD9VVBw-VZYP1FdWHts0UWHZYSBY",
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get("/trending/movie/week");
  return data.results;
};

export const searchMovies = async () => {
  const { data } = await instance.get("/search/movie", {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });
  return data.results;
};

export const moviesDetails = async (movieId) => {
  const { data } = await instance.get("/movie/&{movieId}");
  return data.results;
};

export const moviesCast = async (movieId) => {
  const { data } = await instance.get("/movie/&{movieId}/credits");
  return data.credits;
};

export const moviesReviews = async (movieId) => {
  const { data } = await instance.get("/movie/&{movieId}/reviews");
  return data.results;
};
