import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from 'api';
import Searchbar from 'components/Searchbar/Searchbar';
import MovieCard from 'components/MovieCard';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    async function movieRequest() {
      try {
        const response = await fetchMovieSearch(searchQuery);
        setSearchMovies(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    movieRequest();
  }, [searchQuery]);

  const requestUpdate = query => {
    const update = query !== '' && { query };
    setSearchParams(update);
  };

  return (
    <>
      <Searchbar value={searchQuery} onChange={requestUpdate} />
      <MovieCard movies={searchMovies} />
      {loading && <Loader />}
    </>
  );
};

export default Movies;
