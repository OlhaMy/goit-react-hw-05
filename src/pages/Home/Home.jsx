import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const query = searchValue.get("query") ?? "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await searchMovies();
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });

  const handleChangeInput = (e) => {
    // параметри для пошуку
    searchValue.set("query", "e.target.value");
    setSearchValue(searchValue);
  };
  const filterData = movies.filter((item) =>
    item.trends.toLowerCase().includes(searchValue.toLowerCase().trim())
  );
  return (
    <div>
      <h1></h1>;
      <SearchBar />;
    </div>
  );
};
export default Home;
