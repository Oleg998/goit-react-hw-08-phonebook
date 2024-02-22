import css from './ImageGallery.module.css';
import ImmageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';


export default function ImageGallery({ items }) {

  const elemets = items.map(({ id, title, poster_path }) => (
    <ImmageGalleryItem key={id}  titel={title} img={poster_path} id={id} />
  ));

  return <ul className={css.ImageGallery}>{elemets}</ul>;
}
