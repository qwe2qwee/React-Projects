import React, { useState, useCallback, useEffect } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoding] = useState(false);
  const [error, serError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoding(true);
    serError(null);
    try {
      const geth = await fetch("https://send-data-186df-default-rtdb.firebaseio.com/movies.json");
      if (!geth.ok) {
        throw new Error("something went wrong");
      }
      const data = await geth.json();
      console.log(data.results);
      const loadingMovies = [];
      for (const key in data) {
        loadingMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseData: data[key].releaseData,
        });
      }
      setMovies(loadingMovies);
    } catch (error) {
      serError(error.message);
    }

    setIsLoding(false);
  }, []);
  const AddMovieHandler = async (movie) => {
    const response = await fetch("https://send-data-186df-default-rtdb.firebaseio.com/movies.json", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={AddMovieHandler}></AddMovie>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && !error && (
          <MoviesList movies={movies} />
        )}
        {!isLoading && movies.length === 0 && <p>Not found movie</p>}
        {isLoading && <p>loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
};

export default App;
