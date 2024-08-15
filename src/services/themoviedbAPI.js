import axios from "axios";

export const fetchPhotos = async (query, page) => {
  console.log(query);
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        per_page: 20,
        page,
        client_id: "532dc56145beea72e7d5b32ce82f74a7",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
};
