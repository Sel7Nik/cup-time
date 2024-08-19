import { productsList } from '../productsList'
import { CartItem } from './CartItem'

export const Cart = () => {
  return (
    <section className="cart">
      <div className="container cart__container">
        <h2 className="cart__title">Корзина (6)</h2>

        <ul className="cart__list">
          {productsList.map((item) => {
            return <CartItem key={item.id} props={item} />
          })}
        </ul>

        <div className="cart__summury">
          <h3 className="cart__summury-title">Итого:</h3>
          <p className="cart__summury-total">2200&nbsp;₽</p>
          <button className="cart__order-btn">Заказать</button>
        </div>
      </div>
    </section>
  )
}
