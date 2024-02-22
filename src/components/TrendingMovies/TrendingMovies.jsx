import { getTrendig } from 'components/Api/api';
import { useEffect, useState } from 'react';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';

const TrendingMovies = () => {
  const [state, setState] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const { data } = await getTrendig();
        setIsLoading(true);
        setState(prevState => data.results);

        setIsLoading(true);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (!state) {
      fetchTrendingMovies();
    }
  }, [state]);
  

  
  return (
    <div>
      {error && <p>..............{error}..................</p>}
      {isLoading && <Loader></Loader>}
      {state && <ImageGallery items={state} />};
    </div>
  );
    
    
};

export default TrendingMovies;
