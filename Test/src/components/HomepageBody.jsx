import { Component } from "react";
import Gallery from "./Gallery";

class HomepageBody extends Component {
  endpoints = [
    "http://www.omdbapi.com/?apikey=c4b8b6a5&s=Harry%20Potter",
    "http://www.omdbapi.com/?apikey=c4b8b6a5&s=Lord%20Rings",
    "http://www.omdbapi.com/?apikey=c4b8b6a5&s=Avengers",
  ];

  titles = ["Trending now", "Watch it again", "New Releases"];

  render() {
    return (
      <section>
        <Gallery title={this.titles[0]} endpoint={this.endpoints[0]} />
        <Gallery title={this.titles[1]} endpoint={this.endpoints[1]} />
        <Gallery title={this.titles[2]} endpoint={this.endpoints[2]} />
      </section>
    );
  }
}
export default HomepageBody;
