import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Movielist from './components/Movielist'
import Header from './components/Header';
import AddToFavourite from './components/addToFavourites';
import RemoveFromFavourites from './components/removeFromFavourites';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import Notification from './components/Notification';




function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favouriteMovie, setFavouriteMovie] =  useState([]);
  const [showNotification, setShowNotification] = useState(false)
                 
  const apiKey = 'e2dff10079dfcf3cde4ad83d6d2517e2';
  const baseUrl = 'https://api.themoviedb.org/3';
  const popularMovies = `${baseUrl}/movie/popular?api_key=${apiKey}`
 
  
 const fetchMovies = useCallback((query) => {

  const url = query ? `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}` :
  popularMovies;

  fetch(url)
  .then(res => {
    //error coming back from the server
    if(!res.ok) {
      throw Error('could not fetch data for that resource!')
    }
    return res.json()
  })
  .then (data => {
    setIsLoading(false);
    setError(null)
    console.log(data)
    setMovies(data.results)
    
  })
  //auto catches network or connection error
  .catch (err => {
    setIsLoading(false)
    setError(err.message)
  })
 }, [popularMovies]);

 

 const handleSearch = (event) => {
  event.preventDefault();
  fetchMovies(searchQuery);
  
 
  }

useEffect(() => {
  fetchMovies()
}, [fetchMovies]);

// Load favourite movies from local storage when the component mounts
useEffect(() => {
  const favouriteMovieSaved = JSON.parse(localStorage.getItem('favourite-movie'));
  setFavouriteMovie(favouriteMovieSaved)
}, [])


//setting the local storage.
const saveToLocalStorage = (items) => {
  localStorage.setItem('favourite-movie', JSON.stringify(items));//Saving the favourite movie in local storage
}

const addToFavourites = (movie) => {
  // Check if the movie is already in the favorite list
  
  if (!favouriteMovie.some((favMovie) => favMovie.id === movie.id)) {
    const updatedFavourites = [...favouriteMovie, movie];
    setFavouriteMovie(updatedFavourites);
    saveToLocalStorage(updatedFavourites);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false)
    }, 3000)
  }
};

const removeFromFavourites = (movie) => {
  const removedFavourites = favouriteMovie.filter((favMovie) => favMovie.id !== movie.id);
  setFavouriteMovie(removedFavourites);
  saveToLocalStorage(removedFavourites);
}

  return (
    <div className="App">
       <Router>
      <Header header="ReelFlix" searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch}/>
      {isLoading && <div className='loading'>Loading...</div>}
      {error && <div className='error'>Error: {error}</div>}
      <Switch>
      <Route exact path="/">
      <Movielist
         header='Popular Movies'
         movies={movies}
         handleFavouriteMovieClick={addToFavourites} 
         FavouriteComponent={AddToFavourite} 
       />
       </Route>

       <Route path="/favourites">
      
        </Route>
        {/* Add a route for the movie details page */}
       <Route path="/movie/:id">
          <MovieDetails movies={movies}/>
       </Route>
       </Switch>
       <Movielist
         header='Favourite Movies'
         movies={favouriteMovie}
         handleFavouriteMovieClick={removeFromFavourites} 
         FavouriteComponent={RemoveFromFavourites} />
      </Router>
      {showNotification && <Notification message = 'Added to favourites⭐️' onClose={() =>setShowNotification(false)}/>}
    </div>
    
  );
}

export default App;
