export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <a className="logo-link header__logo-link" href="#">
          <img className="logo-img" src="images/logo.svg" alt="logo-svg Cup Time" />
        </a>
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
        <a className="header__cart-link" href="cart.html">
          6
        </a>
      </div>
    </header>
  )
}
