import { Suspense } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Nav } from './Nav/Nav';
import { Loader } from './Loader/Loader';

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Layout = () => {
  return (
    <Container>
      <Nav />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
