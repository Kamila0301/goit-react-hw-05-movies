import { Link, useLocation } from 'react-router-dom';

const MovieCard = ({ movies }) => {
  const location = useLocation();
  return (
    <main>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default MovieCard;
