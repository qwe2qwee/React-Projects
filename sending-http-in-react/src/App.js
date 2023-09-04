import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  function fetchMoviesHandler() {
    fetch("https://swapi.py4e.com/api/films")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        const transformedMovies = data.results.map((mov) => {
          return {
            id: mov.episode_id,
            title: mov.title,
            openingText:mov.opening_crawl,
            releaseData:mov.release_data
          };
        });
        setMovies(transformedMovies);
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
