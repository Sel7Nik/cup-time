import { API_URL } from '/const'

const Product = ({ props }) => {
  const images = `${API_URL}${props.img}`
  const title = props.title
  const price = props.price

  return (
    <li className="products__item">
      <article className="product">
        <img className="product__image" src={images} alt={title} />
        <div className="product__content">
          <h3 className="product__title">{title}</h3>
          <p className="product__price">{price} ₽</p>
        </div>
      </article>
    </li>
  )
}

export default Product
