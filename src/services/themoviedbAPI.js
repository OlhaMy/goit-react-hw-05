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
        query: query,
        include_adult: false,
        language: "en-US",
        page: 1,
      },
    });

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
