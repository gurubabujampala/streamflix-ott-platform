import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MoviesByGenre from './pages/MoviesByGenre';
import WebSeries from './pages/WebSeries';
import SeriesByGenre from './pages/SeriesByGenre';
import MovieGames from './pages/MovieGames';
import Music from './pages/Music';
import Artists from './pages/Artists';
import Albums from './pages/Albums';
import MusicGenres from './pages/MusicGenres';
import './styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:genre" element={<MoviesByGenre />} />
          <Route path="/web-series" element={<WebSeries />} />
          <Route path="/web-series/:genre" element={<SeriesByGenre />} />
          <Route path="/movie-games" element={<MovieGames />} />
          <Route path="/music" element={<Music />} />
          <Route path="/music/artists" element={<Artists />} />
          <Route path="/music/albums" element={<Albums />} />
          <Route path="/music/genres" element={<MusicGenres />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
