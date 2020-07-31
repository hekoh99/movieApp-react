import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

function Movie({ title, year,summary, poster }){
    return (
        <div class="movie">
            <img src={poster} alt="..." />
            <div classs="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h3 class="movie__year">{year}</h3>
                <p class="movie__summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    summary : PropTypes.string,
    poster : PropTypes.string,
};

export default Movie;