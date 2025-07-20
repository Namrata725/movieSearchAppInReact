import "./css/Header.css";
function Header({ search, setSearch, getData }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>WhoWatched?</h2>
      </div>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search for movies..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={getData}>Search</button>
      </div>

      <div className="userProfile"></div>
    </nav>
  );
}

export default Header;
