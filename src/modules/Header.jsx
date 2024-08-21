import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export const Header = () => {
  const location = useLocation()
  const { cart } = useCart()

  const getActiveClass = (category) => {
    const currentCategory = new URLSearchParams(location.search).get('category')
    // console.log('category: ', category)
    return currentCategory === category ? 'active' : ''
  }
  return (
    <header className="header">
      <div className="container header__container">
        <Link className="logo-link header__logo-link" to="/">
          <img className="logo-img" src="images/logo.svg" alt="logo-svg Cup Time" />
        </Link>
        <nav className="nav header__nav">
          <ul className="menu header__menu">
            <li className="menu-item header__menu-item">
              <Link className={`menu-link header__menu-link ${getActiveClass('tea')}`} to="/products?category=tea">
                Чай
              </Link>
            </li>
            <li className="menu-item header__menu-item">
              <Link
                className={`menu-link header__menu-link ${getActiveClass('coffee')}`}
                to="/products?category=coffee"
              >
                Кофе
              </Link>
            </li>
            <li className="menu-item header__menu-item">
              <Link
                className={`menu-link header__menu-link ${getActiveClass('teapots')}`}
                to="/products?category=teapots"
              >
                Чайники
              </Link>
            </li>
            <li className="menu-item header__menu-item">
              <Link
                className={`menu-link header__menu-link ${getActiveClass('cezves')}`}
                to="/products?category=cezves"
              >
                Турки
              </Link>
            </li>
            <li className="menu-item header__menu-item">
              <Link className={`menu-link header__menu-link ${getActiveClass('other')}`} to="/products?category=other">
                Прочее
              </Link>
            </li>
          </ul>
        </nav>
        <Link className="header__cart-link" to="/cart">
          {cart.length}
        </Link>
      </div>
    </header>
  )
}
