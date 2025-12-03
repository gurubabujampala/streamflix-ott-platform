import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        StreamFlix
                    </Link>
                    <nav className="nav">
                        <Link to="/movies" className="nav-link">
                            Movies
                        </Link>
                        <Link to="/web-series" className="nav-link">
                            Web Series
                        </Link>
                        <Link to="/movie-games" className="nav-link">
                            Movie Games
                        </Link>
                        <Link to="/music" className="nav-link">
                            Music
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
