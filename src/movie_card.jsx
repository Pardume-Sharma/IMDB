import React, { useState, useEffect } from 'react';
import './global.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movieBox">
      <img className="movie-img" src={movie.Poster} alt="movie-img" />
      <div className="movie-info">
        <div className="movie-title">{movie.Title}</div>
        <div className="movie-year">{movie.Year}</div>
      </div>
      <div className="watch">
        <pre>+ WatchList</pre>
      </div>
    </div>
  );
};

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://www.omdbapi.com/?s=star wars') // Fetching multiple movies with search term "star wars"
      .then(response => response.json())
      .then(data => {
        if (data.Response === "True") {
          setMovies(data.Search.slice(0,50) || []); // Setting movies array to the first four search results
        } else {
          console.error('Error fetching movies:', data.Error);
        }
      })
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="watchBox">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
