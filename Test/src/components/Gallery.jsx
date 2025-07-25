import "../css/Gallery.css";
import { Component } from "react";
import { Card, Button } from "react-bootstrap";

class Gallery extends Component {
  state = {
    movies: [],
  };

  getPictures = () => {
    fetch(this.props.endpoint)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Non siamo riusciti a caricare le immagini");
        }
      })
      .then((data) => {
        // console.log("data", data)
        // console.log("data.Search", data.Search)
        this.setState({ movies: data.Search });
        // console.log("this.state.movies", this.state.movies);
      })
      .catch((err) => console.log("Errore!", err));
  };

  componentDidMount() {
    // console.log("Sono dentro gallery!");
    this.getPictures();
  }

  render() {
    return (
      <article className="m-4">
        <h2 className="text-light mb-3">{this.props.title}</h2>
        <div className="d-flex overflow-auto pb-3">
          {this.state.movies.map((movie) => {
            if (movie.Type !== "game") {
              return (
                <div className="me-2" key={movie.imdbID}>
                  {/* <img src={movie.Poster} alt={"Poster of" + movie.Title}/> */}
                  <Card >
                    <Card.Img variant="top" src={movie.Poster} />
                    <Card.Body>
                      <Card.Title>{movie.Title}</Card.Title>
                      <Button variant="danger">Watch</Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            }
          })}
        </div>
      </article>
    );
  }
}

export default Gallery;
