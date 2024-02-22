import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewsById } from 'components/Api/api';

import Loader from 'components/Loader/Loader';
import NotFound from 'pages/NotFound/NotFound';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await getReviewsById(id);
        setReviews(data.results);
        setIsLoading(true);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [id]);

  const elements = reviews.map(({ content, id }) => <p key={id}>{content}</p>);

  return (
    <div>
      {error && <NotFound></NotFound>}
      {isLoading && <Loader></Loader>}
      {reviews && <div>{elements}</div>}
      {!reviews.length && (
        <h2>Sorry, there are no reviews in the database for this film.</h2>
      )}
    </div>
  );
};

export default Reviews;
