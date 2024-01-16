import poster from '../defaultImage';

const CastRender = ({ cast: { profile_path, name, character }, id }) => {
  return (
    <li key={id}>
      <img src={poster(profile_path)} alt="Actor" width={'250px'} />
      <h3>{name}</h3>
      <p>Character: {character}</p>
    </li>
  );
};

export default CastRender;
