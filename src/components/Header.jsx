import "./css/Header.css";
function Header() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>WhoWatched?</h2>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search for movies..." />
        <button>Search</button>
      </div>

      <div className="userProfile">
        <button>User</button>
      </div>
    </nav>
  );
}

export default Header;
