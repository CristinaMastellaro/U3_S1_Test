import { Component } from "react";
import Gallery from "./Gallery";

class HomepageBody extends Component {
  endpoints = [
    "http://www.omdbapi.com/?apikey=c4b8b6a5&s=Harry%20Potter",
    "http://www.omdbapi.com/?apikey=c4b8b6a5&s=Lord%20Rings",
    "http://www.omdbapi.com/?apikey=c4b8b6a5&s=Avengers",
  ];

  state = {
    movies: [],
    titles: ["Trending now", "Watch it again", "New Releases"]
  };

//   getPictures = (endpoint) => {
//     fetch(endpoint)
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         } else {
//           throw new Error("Non siamo riusciti a caricare le immagini");
//         }
//       })
//       .then((data) => {
//         // console.log("data", data)
//         let totalMovies = this.state.movies;
//         totalMovies.push(data.Search);
//         this.setState({ movies: totalMovies });
//         console.log("this.state.movies", this.state.movies);
//       })
//       .catch((err) => console.log("Errore!", err));
//   };

  componentDidMount() {
    // for (let i = 0; i < this.endpoints.length; i++) {
    //   this.getPictures(this.endpoints[i]);
    // }
    console.log("Dovrei entrare in galleria...")
  }

  render() {
    return (
    <section>
      {/* {this.state.movies.map((movie, index) => {
        return( */}
        <Gallery title={this.state.titles[0]} endpoint={this.endpoints[0]} />
        <Gallery title={this.state.titles[1]} endpoint={this.endpoints[1]} />
        <Gallery title={this.state.titles[2]} endpoint={this.endpoints[2]} />
        {/* )
      })} */}
    </section>
    )
  }
}
export default HomepageBody;
