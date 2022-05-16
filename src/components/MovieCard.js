import React, { useState } from "react";   

const MovieCard=({movie}) =>{
 
    return (
        <div >
          <h1>{movie.title}</h1>
            <img src={movie.PosterURL} width="180" height="180" alt="img"/>
          <p>{movie.description}</p>
          <p>{movie.rating}</p>
        </div>
    );
};

export default MovieCard;