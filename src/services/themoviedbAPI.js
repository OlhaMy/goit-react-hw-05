import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "532dc56145beea72e7d5b32ce82f74a7",
  },
});

export const searchMovies = async (query) => {
  try {
    const { data } = await instance.get("/search/movie", {
      params: {
        query,
        include_adult: false,
        language: "en-US",
        page: 1,
        region: "",
      },
    });

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTrendingMovies = async () => {
  try {
    const { data } = await instance.get("/trending/movie/day", {
      params: {
        time_window: "day",
        language: "en-US",
      },
    });

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieDetails = async () => {
  try {
    const { data } = await instance.get("/movie/movie_id", {
      params: {
        movie_id,
        language: "en-US",
      },
    });

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieCredits = async () => {
  try {
    const { data } = await instance.get("/movie/movie_id/credits", {
      params: {
        movie_id,
        language: "en-US",
      },
    });

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getReviews = async () => {
  try {
    const { data } = await instance.get("/movie/movie_id/reviews", {
      params: {
        movie_id,
        page: 1,
      },
    });

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
