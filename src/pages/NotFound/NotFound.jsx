import css from "./NotFound.module.css"
import imgSrc  from "./error404.png"
import { Link } from "react-router-dom"

const NotFound = ()=> {
    return (
          <><div className={css.error}>
            <img src={imgSrc} alt="error"  className={css.img}/>
        </div><div className={css.errorMessage}>
                <h3>Ой! Страница не найдена!</h3>
                <p>К сожалению мы не можем найти запрошенную вами страницу. Возможно, вы неправильно ввели адрес.</p>
                <Link to="/">  Go to Home Page</Link>
            </div></>
    )
}

export default NotFound