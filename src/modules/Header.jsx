import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useProduct } from '../context/ProductContext'
// import { useState } from 'react'

export const Header = () => {
  const location = useLocation()
  const { cart } = useCart()
  const { categories } = useProduct()

  // const totalProducts = cart.length
  const summaryProducts = cart ? cart.reduce((accum, item) => item.quantity + accum, 0) : 0

  const getActiveClass = (category) => {
    const currentCategory = new URLSearchParams(location.search).get('category')
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
            {Object.entries(categories).map(([key, value]) => (
              <li key={key} className="header__menu-item menu-item">
                <Link
                  className={`header__menu-link menu-link ${getActiveClass(key)}`}
                  to={`/products?category=${key}`}
                  // onClick={closeMenu}
                >
                  {value}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link className="header__cart-link" to="/cart">
          {summaryProducts}
        </Link>
      </div>
    </header>
  )
}
