import "../css/Gallery.css";
import { Component } from "react";
import { Card, Button, Spinner, Alert, Modal } from "react-bootstrap";

class Gallery extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
    error: "",
    show: false,
    src: "",
    alt: "",
    year: ""
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
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
        this.setState({
          movies: data.Search,
          isLoading: false
        });

        // console.log("this.state.movies", this.state.movies);
      })
      .catch((err) => {
        this.setState({ isLoading: false, isError: true, error: err });
        console.log("Errore!", err);
      });
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
          {this.state.isLoading && !this.state.isError && (
            <Spinner animation="border" variant="danger" className="m-5" />
          )}
          {this.state.isError && (
            <Alert variant="danger" className="text-center my-2">
              {"We couldn't load the movies: " + this.state.error}
            </Alert>
          )}
          {this.state.movies.map((movie) => {
            if (movie.Type !== "game") {
              return (
                <div className="p-2" key={movie.imdbID}>
                  <img
                    src={movie.Poster}
                    alt={movie.Title + " - " + movie.Year}
                    className="text-light immIngrandire"
                    onClick={() => {
                        this.setState({src: movie.Poster, alt: movie.Title, year: movie.Year})
                        this.handleShow()}}
                  />
                </div>
              );
            }
          })}
        </div>
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header className="justify-content-center bg-black">
              <img
                src={this.state.src}
                alt={this.state.alt}
                className="text-light"
              />
            </Modal.Header>
            <Modal.Body className="d-flex flex-column align-items-center">
              <p className="fw-bold">{this.state.alt}</p>
              <p>{this.state.year}</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa accusamus dolores possimus dolorem. Delectus, ullam, soluta laboriosam hic aliquid nulla quasi dicta, autem ex sapiente consectetur vel asperiores incidunt?</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="danger" onClick={this.handleClose}>
                Watch
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </article>
    );
  }
}

export default Gallery;
