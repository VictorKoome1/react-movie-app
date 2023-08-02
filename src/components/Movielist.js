import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Movielist = ({movies, handleFavouriteMovieClick, FavouriteComponent, header,}) => {
  
  
    return (
      <>
      <h2>{header}</h2>
        {movies.map((movie) => (
            <div key={movie.id} className='movie-poster'>
              <Link to = {`/movie/${movie.id}`}>
            <img 
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title} 
            />
            </Link>
            <div onClick={() => handleFavouriteMovieClick(movie)}>
            <FavouriteComponent />
            </div>
            </div>
           ))}
       </>
    )
   
}

export default Movielist;
