import { useState } from 'react';
import { Wrapper, Input, Button, Form } from './Searchbar.styled';

const Searchbar = ({ onChange }) => {
  const [query, setQuery] = useState('');

  const inputRequest = event => {
    setQuery(event.target.value);
  };

  const handleChange = event => {
    event.preventDefault();
    if (!query.trim()) {
      return;
    }
    onChange(query);
    setQuery('');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleChange}>
        <Input
          name="searchMovies"
          type="text"
          required
          placeholder="Search movies"
          value={query}
          onChange={inputRequest}
        />
        <Button type="submit">Search</Button>
      </Form>
    </Wrapper>
  );
};
export default Searchbar;
