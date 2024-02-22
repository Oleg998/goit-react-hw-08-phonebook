import css from './MainMenu.module.css';
import { NavLink } from 'react-router-dom';

const MainMenu = () => {
  return (
    <div className={css.wrapper}>
      <ul className={css.meinMenuList}>
        <li className={css.mainMenuItem}>
          <NavLink to="/" className={css.meinMenuLink}>
            Home
          </NavLink>
        </li>
        <li className={css.mainMenuItem}>
          <NavLink to="/movies" className={css.meinMenuLink}>
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
