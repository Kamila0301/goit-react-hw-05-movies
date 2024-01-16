import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchImageReviews } from 'api';
import { toast } from 'react-toastify';
import ReviewRender from './ReviewRender';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReview() {
      try {
        const responseReviews = await fetchImageReviews(movieId);
        setReviews(responseReviews.results);
      } catch (error) {
        toast.error('Reviews isn`t found!');
      }
    }
    fetchReview();
  }, [movieId]);

  return (
    <>
      {reviews && (
        <div>
          <ul>
            {reviews.map((review, index) => {
              return <ReviewRender review={review} index={index} />;
            })}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <p className="no-reviews">Sorry, there isn`t any reviews</p>
      )}
    </>
  );
};

export default Reviews;
