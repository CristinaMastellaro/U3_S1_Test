import "../css/Gallery.css";
import { Component } from "react";
import { Card, Button, Spinner, Alert, Modal } from "react-bootstrap";

class Gallery extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
    error: "",
    show: false
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
        this.setState({ movies: data.Search, isLoading: false });
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
                    alt={"Poster of" + movie.Title}
                    onClick={() => {
                      this.setState({show: !this.state.show})
                    }}
                  />
                  {/* <Card onClick={() => {}}>
                    <Card.Img variant="top" src={movie.Poster} />
                    <Card.Body>
                      <Card.Title>{movie.Title}</Card.Title>
                      <Card.Text>{movie.Year}</Card.Text>
                      <Button variant="danger">Watch</Button>
                    </Card.Body>
                  </Card> */}
                  {/* <div
                    className="modal show"
                    style={{ display: "block", position: "initial" }}
                  >
                    {this.state.show && (<Modal.Dialog>
                      <Modal.Header closeButton>
                        <Modal.Title>{movie.Title}</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <p>{movie.Year}</p>
                      </Modal.Body>

                      <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="danger">Watch</Button>
                      </Modal.Footer>
                    </Modal.Dialog>)}
                  </div> */}
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
