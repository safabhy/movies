import React from 'react';
import  { useState } from 'react';
const AddMovie = (props) => {
   
        const [show, setShow] = useState(false);
    
 
        const [NewMovie,SetNewMovie] = useState({
            id:"",
            title:"",
            description:"",
            PosterURL:"",
            rating:"",
        })
        const handlechange =(e) =>{
            SetNewMovie({...NewMovie,[e.target.name]:e.target.value})}
        
        const handleSave =()=>{
              props.handleMovieAdd(NewMovie)
                SetNewMovie({
                    id:"",
                    title:"",
                    description:"",
                    PosterURL:"",
                    rating:"", 
                })
                setShow(false)
            
        }
    return (
        <div>
            
        
      
         
            <input type="texte" name="id" placeholder="id" onChange={handlechange} value={NewMovie.id}  ></input>
    <input type="texte" name="title" placeholder="Title" onChange={handlechange} value={NewMovie.title}></input>
    <input type="texte" name="description" placeholder="Description" onChange={handlechange} value={NewMovie.description}></input>
    <input type="texte" name="PosterURL" placeholder="URL" onChange={handlechange} value={NewMovie.PosterURL}></input>
    <input type="texte" name="rating" placeholder="Rating" onChange={handlechange} value={NewMovie.rating}></input>

          <button onClick={handleSave} className='btn'>
          Add  Movies
          </button>
        </div>
    );
};

export default AddMovie;