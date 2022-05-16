import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';
import  { useState } from 'react';
import Filter from './components/Filter';
import Rating from './components/Rating';
import AddMovie from './components/AddMovie';
const App=() =>{


  const [Movies, setMovies] = useState([
    {
    id:"1",
    title:"batman begins",
    description: "The film reboots the Batman film series.",
    PosterURL:"Batman_Begins.jpg",
    rating:4

  },
  {
    id:"2",
    title:"Alice au pays des merveilles",
    description: "Alice, jeune fille rêveuse, durant son cours d'histoire .",
    PosterURL:"Alice.jpg",
    rating:2

  },
  {
    id:"3",
    title:"Cendrillon",
    description: "Cendrillon, une douce jeune fille, subit les méchancetés de sa belle-mère et de ses deux horribles filles. ",
    PosterURL:"cinderlla.jpg",
    rating:3

  },
  {
    id:"4",
    title:"Matrix",
    description: "Matrix,est un film de science-fiction de type « cyberfilm . ",
    PosterURL:"matrix.jpg",
    rating:3

  }]);
    const handleMovieAdd=(newvalue)=>{
    setMovies([...Movies,newvalue])
  }  
  const [search, setsearch] = useState("")
  const searchhandle=(search)=>{
    setsearch(search)
 
  } 
  const [searchResult, setsearchResult] = useState("")
  const  [rate, setrate] = useState(0)
  const handleRate=(rate)=>{
    setrate(rate)
  }
  return (
    <>
  
   <Header/>
    
    <div className="app">
    <div className="Flex">
      <div className="container">
    <Filter search={search}   searchkey={searchhandle} ></Filter> 
    <Rating handleRate={handleRate} rate={rate} setrate={setrate}></Rating>
    
   
    <MovieList Movies={Movies.filter(el=>el.title.toLowerCase().includes(search.toLowerCase())&& el.rating>=rate)}/>
    <AddMovie handleMovieAdd={handleMovieAdd}/>
    </div>
    </div>
    </div>
   
     </>
  );
}

export default App;
