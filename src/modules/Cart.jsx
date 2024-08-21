import { useCart } from '../context/CartContext'
import { CartItem } from './CartItem'
import { SkeletonLoader } from './SkeletonLoader'

export const Cart = () => {
  const { cart } = useCart()

  const totalPrice = cart ? cart.reduce((accum, item) => accum + item.quantity * item.price, 0) : 0
  return (
    <section className="cart">
      <div className="container cart__container">
        <h2 className="cart__title">Корзина ({cart.length})</h2>

        <ul className="cart__list">
          {cart ? (
            cart.map((item) => {
              return <CartItem key={item.id} props={item} />
            })
          ) : (
            <SkeletonLoader />
          )}
        </ul>

        <div className="cart__summury">
          <h3 className="cart__summury-title">Итого:</h3>
          <p className="cart__summury-total">{totalPrice}&nbsp;₽</p>
          <button className="cart__order-btn">Заказать</button>
        </div>
      </div>
    </section>
  )
}
