import { Component } from "react";
import Gallery from "./Gallery";

class HomepageBody extends Component {
  endpoints = [
    "http://www.omdbapi.com/?apikey=c4b8b6a5&s=Harry%20Potter",
    "http://www.omdbapi.com/?apikey=c4b8b6a5&s=My%20Little%20Pony",
    "http://www.omdbapi.com/?apikey=c4b8b6a5&s=Winx",
  ];

  titles = ["Harry Potter", "My Little Ponies", "Winx"];

  render() {
    return (
      <section>
        <Gallery title={this.titles[1]} endpoint={this.endpoints[1]} />
        <Gallery title={this.titles[0]} endpoint={this.endpoints[0]} />
        <Gallery title={this.titles[2]} endpoint={this.endpoints[2]} />
      </section>
    );
  }
}
export default HomepageBody;
