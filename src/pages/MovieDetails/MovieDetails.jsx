import { Suspense } from 'react';
import { fetchImageById } from 'api';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useRef, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import {
  ContainerStyle,
  Genres,
  Title,
  SubTitle,
  Description,
  Sub,
  SubUl,
} from './MovieDetails.styled';
import styled from 'styled-components';

const LinkStyle = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchImage() {
      try {
        const movieInformation = await fetchImageById(movieId);
        setMovie(movieInformation);
      } catch (error) {
        console.log(error);
      }
    }
    fetchImage();
  }, [movieId]);

  const { original_title, vote_average, genres, overview, poster_path } =
    movie || {};
  const vote = vote_average * 10;
  const voteFixed = vote.toFixed(2);

  return (
    <>
      <LinkStyle to={backLinkLocationRef.current}>Go back</LinkStyle>

      <ContainerStyle>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          width={200}
          height={250}
          alt="poster"
        />
        <div>
          <Title>{original_title}</Title>
          <h3>User score: {voteFixed}%</h3>
          <SubTitle>Overview</SubTitle>
          <Description>{overview}</Description>
          <SubTitle>Genres</SubTitle>
          <Genres>
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </Genres>
        </div>
      </ContainerStyle>
      <Sub>Additional information</Sub>
      <SubUl>
        <li>
          <Link to="cast" state={{ from: location }}>
            Cast
          </Link>
        </li>

        <li>
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
        </li>
      </SubUl>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default MovieDetails;
