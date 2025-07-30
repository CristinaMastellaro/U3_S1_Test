import "../css/Gallery.css";
import { useState, useEffect } from "react";
import { Spinner, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Gallery = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const getPictures = () => {
    fetch(props.endpoint)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Non siamo riusciti a caricare le immagini");
        }
      })
      .then((data) => {
        setMovies(data.Search);
        setIsLoading(false);
        console.log("movies", data.Search);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        setError(err);
        console.log("Errore!", err);
      });
  };

  useEffect(() => {
    getPictures();
  }, [props.title]);

  return (
    <article className="m-4">
      <h2 className="text-light mb-3">{props.title}</h2>
      <div className="d-flex overflow-auto pb-3">
        {isLoading && !isError && (
          <Spinner animation="border" variant="danger" className="m-5" />
        )}
        {isError && (
          <Alert variant="danger" className="text-center my-2">
            {"We couldn't load the movies: " + error}
          </Alert>
        )}
        {movies === undefined && props.title !== "" && (
          <Alert variant="danger" className="text-center my-2">
            {"We didn't find any movies"}
          </Alert>
        )}
        {movies !== undefined &&
          movies.map((movie) => {
            if (
              movie.Type !== "game" &&
              (movie.Type === props.type || movie.type === undefined)
            ) {
              return (
                <div className="p-2" key={movie.imdbID}>
                  <img
                    src={movie.Poster}
                    alt={movie.Title + " - " + movie.Year}
                    className="text-light immIngrandire"
                    onClick={() => {
                      navigate(`/movie-details/${movie.imdbID}`);
                    }}
                  />
                </div>
              );
            }
          })}
      </div>
    </article>
  );
};

export default Gallery;
