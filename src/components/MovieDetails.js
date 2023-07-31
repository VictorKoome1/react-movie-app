import './Moviedetails.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const MovieDetails = ({ movies }) => {

    const {id} = useParams();

    // Find the selected movie from the movies array using the movie ID
  const selectedMovie = movies.find((movie) => movie.id === Number(id));

  if (!selectedMovie) {
    return <div>Loading...</div>;
  }

  // Extract the necessary information from the selected movie
  const { title, poster_path, overview, release_date, vote_count } = selectedMovie;

    return (
      <div className="movie-details" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/w300${poster_path})`,
      }}>
        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
        <div className='details'>
        <h1>{title}</h1>
        <p className='year'>Release Year: {release_date}</p>
        <p className='overview'><span>Overview:</span> {overview}</p>
        <p className='votes'>Vote count:{vote_count}</p>
        {/* Add casts and other movie details here */}
        </div>
      </div>
    );
  };
  
  export default MovieDetails;