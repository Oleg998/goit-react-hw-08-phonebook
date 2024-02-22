
import Searchbar from 'components/Searchbar/Searchbar';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { searceMovies } from 'components/Api/api';
import Loader from 'components/Loader/Loader';
import NotFound from 'pages/NotFound/NotFound';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import { useSearchParams } from 'react-router-dom';
const Movies = () => {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totaPage, setTotalPage] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');
  const page = searchParams.get('page');

  

  useEffect(() => {
    const fetchQuery = async () => {
      try {
        const { data } = await searceMovies(search, page);
        setGallery(prevGallery =>
          data.results?.length ? [...prevGallery, ...data.results] : prevGallery
        );
        setTotalPage(data.total_pages);
        setIsLoading(true);
        if (!data.total_results) {
          toast.error(
            `❌Sorry, there are no Movies matching your search query ${search} . Please try again.`
          );
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (search) {
      fetchQuery();
    }
  }, [search, page]);

  const handelSearchForm = search => {
    setGallery([]);
    setSearchParams({ search, page: 1 });
  };
  const LoadMore = () => setSearchParams({ search, page: Number(page) + 1 });

  return (
    <>
      {error && <NotFound></NotFound>}
      {isLoading && <Loader></Loader>}
      <Searchbar onSubmit={handelSearchForm} />
      <ImageGallery items={gallery} />
      {totaPage > page && (
        <Button onClick={LoadMore} type="button">
          Load more
        </Button>
      )}
    </>
  );
};

export default Movies;
