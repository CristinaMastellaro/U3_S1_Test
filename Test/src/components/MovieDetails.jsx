import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";

const MovieDetails = () => {
  const { movieId } = useParams();
  const endpoint = "http://www.omdbapi.com/?apikey=c4b8b6a5&";
  const [infoMovie, setInfoMovie] = useState([]);

  const retrieveDetails = function () {
    fetch(endpoint + "i=" + movieId)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Problemi nel caricamento");
        }
      })
      .then((movieDet) => {
        console.log("movieDet", movieDet);
        setInfoMovie(movieDet);
      })
      .catch((err) => console.log("Errore!", err));
  };

  useEffect(() => {
    console.log("endpoint", endpoint + "i=" + movieId);
    retrieveDetails();
    console.log("infoMovie", infoMovie);
  }, []);

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          {/* {infoMovie.Rating && ( */}
          <Card>
            <Card.Img
              variant="top"
              src={infoMovie.Poster}
              classsName="mb-4 mx-auto"
              // style={{ maxHeight: "700px", width: "auto" }}
            />
            <Card.Body>
              <Card.Title className="fs-1 text-center mb-3">
                {infoMovie.Title}
              </Card.Title>
              <Card.Text classsName="mt-4 mb-0">
                <span className="fw-bold">Year</span>: {infoMovie.Year} <br />
                <span className="fw-bold">Director</span>: {infoMovie.Director}{" "}
                <br />
                <span className="fw-bold">Actors</span>: {infoMovie.Actors}
              </Card.Text>
              <Card.Text>
                <span className="fw-bold">Plot</span> <br />
                {infoMovie.Plot}
              </Card.Text>
            </Card.Body>
            <Card.Body className="border border-top mt-4 pt-4">
              <Card.Title className="fs-3 text-center mb-3">
                Recensioni
              </Card.Title>
              <Card.Text classsName="mt-4 mb-0">
                <ListGroup>
                  {infoMovie.Ratings &&
                    infoMovie.Ratings.map((rate, i) => {
                      return (
                        <ListGroup.Item key={i}>
                          {rate.Source} - {rate.Value}
                        </ListGroup.Item>
                      );
                    })}
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* )} */}
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
