import React from 'react';
import MovieCard from './MovieCard';
const MovieList = ({Movies}) => {
    
    return (
        <div className="MovieList">
 {Movies.map(movie=> <MovieCard movie={movie}/>)}
    </div>
    );
};

export default MovieList;