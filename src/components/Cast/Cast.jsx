import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchImageCredits } from 'api';
import { toast } from 'react-toastify';
import CastRender from './CastRender';
import { StyleUl } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchFilms() {
      try {
        const responseCast = await fetchImageCredits(movieId);
        setCast(responseCast.cast);
      } catch (error) {
        toast.error('Request is not found!');
      }
    }
    fetchFilms();
  }, [movieId]);

  return (
    <>
      {cast && (
        <div>
          <StyleUl>
            {cast.map((actor, id) => {
              return <CastRender cast={actor} index={id} />;
            })}
          </StyleUl>
        </div>
      )}
    </>
  );
};

export default Cast;
