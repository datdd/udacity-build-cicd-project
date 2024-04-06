import React from 'react';
import PropTypes from 'prop-types';

function MovieItem({ movie, onMovieClick }) {
  return (
    <li className="movieItem" onClick={() => onMovieClick(movie)}>
      {movie.title}
    </li>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieItem;
