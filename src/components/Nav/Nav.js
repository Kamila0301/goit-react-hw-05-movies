import { Header, Link, ListStyle } from './Nav.styled';

export const Nav = () => {
  return (
    <Header>
      <ListStyle>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <nav>
          <Link to="/movies">Movies</Link>
        </nav>
      </ListStyle>
    </Header>
  );
};
