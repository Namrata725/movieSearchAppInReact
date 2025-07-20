function CategoryBtn({ setSearch, getData }) {
  const userInput = (event) => {
    setSearch(event.target.value);
    getData();
  };
  return (
    <div className="categoryButtons">
      <button onClick={userInput} value={"all"}>
        All
      </button>
      <button onClick={userInput} value={"romcom"}>
        Rom-Com
      </button>
      <button onClick={userInput} value={"comedy"}>
        Comedy
      </button>
      <button onClick={userInput} value={"action"}>
        Action
      </button>
      <button onClick={userInput} value={"drama"}>
        Drama
      </button>
      <button onClick={userInput} value={"horror"}>
        Horror
      </button>
      <button onClick={userInput} value={"thriller"}>
        Thriller
      </button>
      <button onClick={userInput} value={"documentary"}>
        Documentary
      </button>
      <button onClick={userInput} value={"animation"}>
        Animation
      </button>
    </div>
  );
}

export default CategoryBtn;
