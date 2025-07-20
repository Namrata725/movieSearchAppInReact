import "./css/card.css";

function Card({ data }) {
  if (!data || (Array.isArray(data) && data.length === 0)) {
    return <div>No Movies to display</div>;
  }

  return (
    <div className="card-grid">
      {data.map((movie, index) => (
        <div className="card" key={index}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="cardContainer">
            <p>
              <strong>Original Title:</strong> {movie.original_title}
            </p>
            <p>
              <strong>Movie Name:</strong> {movie.title}
            </p>
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>18+ / adult:</strong>{" "}
              {movie.adult === false ? "No" : "Yes"}
            </p>
            <p>
              <strong>Original Language:</strong> {movie.original_language}
            </p>
            <p>
              <strong>Over View: </strong>
              {movie.overview}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
