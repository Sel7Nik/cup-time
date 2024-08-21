export const CartItem = ({ props }) => {
  return (
    <li className="cart__item cart-item">
      <article className="cart-item__card">
        <img className="cart-item__image" src={props.img} alt={props.title} />
        <div className="cart-item__content">
          <h3 className="cart-item__title">{props.title}</h3>
          <div className="cart-item__quantity">
            <button className="cart-item__quantity-btn cart-item__quantity-btn_minus"></button>
            <input className="cart-item__quantity-input" type="number" defaultValue={10} />
            <button className="cart-item__quantity-btn cart-item__quantity-btn_plus"></button>
          </div>
          <p className="cart-item__price">{props.price}&nbsp;₽</p>
        </div>
      </article>
    </li>
  )
}
