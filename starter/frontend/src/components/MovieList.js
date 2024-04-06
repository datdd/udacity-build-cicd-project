import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MovieItem from './MovieItem';

function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_MOVIE_API_URL}/movies`);
      setMovies(response.data.movies);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} onMovieClick={onMovieClick} />
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieList;
