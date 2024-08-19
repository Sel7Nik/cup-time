import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link className="logo-link header__logo-link" to="/">
          <img className="logo-img" src="images/logo.svg" alt="logo-svg Cup Time" />
        </Link>
        <nav className="nav header__nav">
          <ul className="menu header__menu">
            <li className="menu-item header__menu-item">
              <a className="menu-link header__menu-link" href="#">
                Чай
              </a>
            </li>
            <li className="menu-item header__menu-item">
              <a className="menu-link header__menu-link" href="#">
                Кофе
              </a>
            </li>
            <li className="menu-item header__menu-item">
              <a className="menu-link header__menu-link" href="#">
                Чайники
              </a>
            </li>
            <li className="menu-item header__menu-item">
              <a className="menu-link header__menu-link" href="#">
                Турки
              </a>
            </li>
            <li className="menu-item header__menu-item">
              <a className="menu-link header__menu-link" href="#">
                Прочее
              </a>
            </li>
          </ul>
        </nav>
        <Link className="header__cart-link" to="/cart">
          6
        </Link>
      </div>
    </header>
  )
}
