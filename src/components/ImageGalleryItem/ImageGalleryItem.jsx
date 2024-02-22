import css from './ImmageGalleryItem.module.css';
import { Link , useLocation} from 'react-router-dom';
import noFoto from "../ImageGallery/cat.jpg"

const ImmageGalleryItem = ({ titel, img, id }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w440_and_h660_face/';
    const location = useLocation();
  return (
    <>
      <li key={id} className={css.ImageGalleryItem}>
        <Link
          to={`/movies/${id}`}
          state={{ from: location }}
          className={css.link_text}
        >
          <img
            className={css.ImageGalleryItemImage}
            src={img ? imgUrl + img : noFoto}
            alt={titel}
          />
          <p className={css.img_text}>{titel}</p>
        </Link>
      </li>
    </>
  );
};
export default ImmageGalleryItem;
