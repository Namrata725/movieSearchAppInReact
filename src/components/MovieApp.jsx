import { useState, useEffect } from "react";
import CategoryBtn from "./CategoryBtn";
import Header from "./Header";
import Card from "./Card";

function MovieApp() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("all");
  const [loading, setLoading] = useState(false);
  const API_KEY = "f53ae516d413824c906cfe7076db612a";

  const getData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
    );
    const jsonData = await response.json();
    setData(jsonData.results);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ backgroundColor: "#0c1541" }}>
      <Header search={search} setSearch={setSearch} getData={getData} />
      <CategoryBtn setSearch={setSearch} getData={getData} />
      {loading && <div className="spinner"></div>}
      <Card data={data} />
    </div>
  );
}

export default MovieApp;
