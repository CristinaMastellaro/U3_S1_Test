import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CNavbar from "./components/CNavbar";
import CFooter from "./components/CFooter";
import HomepageBody from "./components/HomepageBody";
import MovieDetails from "./components/MovieDetails";
import Movies from "./components/Movies";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from "./components/TvShows";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <CNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomepageBody />
            </>
          }
        />
        <Route path="/search" element={<Search />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        <Route
          path="*"
          element={
            <>
              <HomepageBody />
            </>
          }
        />
      </Routes>
      <CFooter />
    </BrowserRouter>
  );
}

export default App;
