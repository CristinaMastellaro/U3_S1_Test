import Gallery from "./Gallery";
import { useLocation } from "react-router-dom";
import TitleHomepage from "./TitleHomepage";

const HomepageBody = () => {
  const location = useLocation();

  const endpointsMovies = [
    "http://www.omdbapi.com/?apikey=c4b8b6a5&s=Harry%20Potter",
    "http://www.omdbapi.com/?apikey=c4b8b6a5&s=My%20Little%20Pony",
    "http://www.omdbapi.com/?apikey=c4b8b6a5&s=Winx",
  ];

  const endpointsSeries = [
    "http://www.omdbapi.com/?apikey=c4b8b6a5&s=scooby%20doo",
    "http://www.omdbapi.com/?apikey=c4b8b6a5&s=the%20vampire%20diaries",
    "http://www.omdbapi.com/?apikey=c4b8b6a5&s=brooklyn%20nine%20nine",
  ];

  const titlesMovies = ["Harry Potter", "My Little Ponies", "Winx"];
  const titlesSeries = ["Scooby-Doo", "The vampire diaries", "Brooklyn 99"];

  return (
    <>
      {location.pathname === "/" && <TitleHomepage />}
      {(location.pathname === "/movies" || location.pathname === "/") && (
        <section>
          <Gallery
            title={titlesMovies[1]}
            endpoint={endpointsMovies[1]}
            type="movie"
          />
          <Gallery
            title={titlesMovies[0]}
            endpoint={endpointsMovies[0]}
            type="movie"
          />
          <Gallery
            title={titlesMovies[2]}
            endpoint={endpointsMovies[2]}
            type="movie"
          />
        </section>
      )}
      {(location.pathname === "/tv-shows" || location.pathname === "/") && (
        <section>
          <Gallery
            title={titlesSeries[1]}
            endpoint={endpointsSeries[1]}
            type="series"
          />
          <Gallery
            title={titlesSeries[0]}
            endpoint={endpointsSeries[0]}
            type="series"
          />
          <Gallery
            title={titlesSeries[2]}
            endpoint={endpointsSeries[2]}
            type="series"
          />
        </section>
      )}
    </>
  );
};
export default HomepageBody;
