import { Link, useLocation } from 'react-router-dom';
import { fetchMovieList } from 'api';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';

const Home = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [list, isList] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      try {
        const response = await fetchMovieList();

        isList(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, []);

  return (
    <div>
      <div>Trending today</div>
      {loading ? (
        <Loader />
      ) : (
        <ul>
          {list.map(({ id, title }) => {
            return (
              <li key={id}>
                {
                  <Link to={`/movies/${id}`} state={{ from: location }}>
                    {title}
                  </Link>
                }
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Home;

//<button onClick={() => setSearchParams({})}>Search</button>;
