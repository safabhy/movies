import React, { useState } from "react";   

function MovieCard() {
    const [movieData, setMovieData] = useState({});
    
    const [title, setTitle] = useState("Batman Begins ")  
    
    const[posterUrl,setPosterUrl]=useState('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.telerama.fr%2Fcinema%2Ffilms%2Fbatman-begins%2C222779.php&psig=AOvVaw26O8nUf4VR2IVtZlaEwdbD&ust=1652528240433000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLDQx8qx3PcCFQAAAAAdAAAAABAD')
    const [description, setDescription] = useState("Batman Begins. de Christopher Nolan. Avec Christian Bale, Katie Holmes, Michael Caine ")  
    return (
        <div>
            <h1>  {title} </h1>  
            <img src={posterUrl} width={100} height={100}/>
            <p>{description}</p>
        </div>
    );
};

export default MovieCard;