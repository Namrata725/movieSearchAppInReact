import { useState, useEffect } from "react";
import CategoryBtn from "./CategoryBtn";
import Header from "./Header";

function MovieApp() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("all");
  const API_KEY = "f53ae516d413824c906cfe7076db612a";

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
    );
    const jsonData = await response.json();
    setData(jsonData.results);
    console.log(jsonData.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header search={search} setSearch={setSearch} getData={getData} />
      <CategoryBtn setSearch={setSearch} getData={getData} />
    </div>
  );
}

export default MovieApp;
