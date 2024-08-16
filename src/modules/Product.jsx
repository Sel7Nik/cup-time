const Product = ({ props }) => {
  return (
    <li className="products__item">
      <article className="product">
        <img className="product__image" src={props.img} alt={props.title} />
        <div className="product__content">
          <h3 className="product__title">{props.title}</h3>
          <p className="product__price">{props.price} ₽</p>
        </div>
      </article>
    </li>
  )
}

export default Product
