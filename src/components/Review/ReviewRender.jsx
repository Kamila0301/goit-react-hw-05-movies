const ReviewRender = ({ review: { author, content }, id }) => {
  return (
    <>
      <li key={id}>
        <h3>Author: {author}</h3>
        <p>{content}</p>
      </li>
    </>
  );
};

export default ReviewRender;
