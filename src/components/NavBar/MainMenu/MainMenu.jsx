import css from './MainMenu.module.css';
import { NavLink } from 'react-router-dom';

const MainMenu = () => {
  return (
    <div >
    

          <NavLink to="/" className={css.meinMenuLink}>
            Home
          </NavLink>

    </div>
  );
};

export default MainMenu;
