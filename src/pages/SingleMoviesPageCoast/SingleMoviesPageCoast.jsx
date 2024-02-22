import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCoastById } from 'components/Api/api';

import Loader from 'components/Loader/Loader';
import NotFound from 'pages/NotFound/NotFound';
import css from './singleMoviesPageCoast.module.css';
import defaultImg from './cat.jpg';

const Coast = () => {
  const [coast, setCoast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCoast = async () => {
      try {
        const { data } = await getCoastById(id);
        setCoast(data.cast);
        setIsLoading(true);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCoast();
  }, [id]);

  const imgUrl = 'https://image.tmdb.org/t/p/w440_and_h660_face/';

  const elements = coast.map(({ name, profile_path, cast_id }) => (
    <li key={cast_id} className={css.coast_item}>
      <img
        className={css.img_coast}
        src={profile_path ? imgUrl + profile_path : defaultImg}
        alt={name}
      />
      <p className={css.titel}>{name}</p>
    </li>
  ));

  return (
    <div>
      {error && <NotFound></NotFound>}
      {isLoading && <Loader></Loader>}
      {!coast.length && (
        <h2>Sorry, there are no actors in the database for this film.</h2>
      )}
      {coast && (
        <div className={css.card}>
          <ul className={css.coast_list}>{elements}</ul>
        </div>
      )}
    </div>
  );
};

export default Coast;
