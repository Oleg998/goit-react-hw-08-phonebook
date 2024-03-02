import css from './NotFound.module.css';
import imgSrc from './error404.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={css.error_container}>
      <div className={css.error}>
        <img src={imgSrc} alt="error" className={css.img} />
      </div>
      <div className={css.errorMessage}>
        <h3>Unfortunately, we cannot find the page you requested.</h3>
        <p> You may have entered the address incorrectly.</p>
        <Link className={css.link} to="/">
          
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
