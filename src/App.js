import logo from './logo.svg';
import './App.css';
import MovieCard from './components/MovieCard';
import Header from './components/Header';

import MovieList from './components/MovieList';

function App() {


  
  return (
    <>
  
      <Header/>
    
    <div className="app">
   
    <MovieCard  />
  
  
      <MovieList />
         
    </div>
   
     </>
  );
}

export default App;
