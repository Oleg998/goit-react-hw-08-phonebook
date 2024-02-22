import {
  Link,
  useParams,
  useNavigate,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect , Suspense } from 'react';
import { getMoviesById } from 'components/Api/api';
import css from './movieDetails.module.css';
import Loader from 'components/Loader/Loader';
import notFound from '../ImageGallery/cat.jpg';

const MovieDetails = () => {
  const [state, setState] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

   const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await getMoviesById(id);
        setState(data);
        setIsLoading(true);
      } catch (error) {
        setError(error.masage);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [id]);
  const imgUrl = 'https://image.tmdb.org/t/p/w440_and_h660_face/';
  return (
    <>
      {error && <p>..............{error}..................</p>}
      {isLoading && <Loader></Loader>}
      <button
        className={css.btn_back}
        onClick={() => navigate(from)}
        type="button"
      >
        &lt;&lt; Back
      </button>
      {state && (
        <div className={css.conteiner}>
          <div className={css.wrapper}>
            <img
              className={css.postrer_film}
              src={
                state.backdrop_path ? imgUrl + state.backdrop_path : notFound
              }
              alt={state.title}
            />
            <div className={css.cointeiner_info}>
              <h1 className={css.titel}>
                {state.title} ({state.release_date.slice(0, 4)})
              </h1>
              <p className={css.score}>
                User Score :{Math.floor(state.vote_average * 10)} %{' '}
              </p>
              <h3 className={css.subtitel}> Overview :</h3>
              <p>{state.overview}</p>
              <h3 className={css.subtitel}> Genres: </h3>
              <ul className={css.item_list}>
                {state.genres.map(({ id, name }) => (
                  <li className={css.item} key={id}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={css.info_conteiner}>
            <h3 className={css.subtitel}>Additional information:</h3>
            <Link to="coast" state={{ from }} className={css.link_info}>
              Coast
            </Link>
            <Link to="reviews" state={{ from }} className={css.link_info}>
              Reviews
            </Link>
            <Suspense Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
