import css from './MainMenu.module.css';
import { NavLink } from 'react-router-dom';
import menuInems from '../items';
import {  useSelector } from 'react-redux';
import { selectAuthIsLogin } from "../../../redux/auth/auth-selectors";


const MainMenu = () => {
  const isLogin=useSelector(selectAuthIsLogin);
  const filtermenuitem = !isLogin ? menuInems.filter(({privat})=> !privat):menuInems ;      
  const elemenets = filtermenuitem.map(({id , to , text})=><li key={id}className={css.meinMenuLink} >
    <NavLink  to={to}>{text}</NavLink>
  </li>)
  return (
    <div >
      <ul className={css.list_item} > {elemenets}  </ul>
     
    </div>
  );
};

export default MainMenu;
