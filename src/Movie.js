import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

function Movie({ title, year,summary, poster, genres }){
    return (
        <div className="movie">
            <img src={poster} alt="..." />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h3 className="movie__year">{year}</h3>
                <ul className="movie__genres">
                    {genres.map((genre, index) => {
                        return (<li key={index} className="movie__gentre">{genre}</li>);
                    })}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    summary : PropTypes.string,
    poster : PropTypes.string,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;