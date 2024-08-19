import Product from './Product'
import { productsList } from '../productsList'

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">Чай</h2>
        <ul className="products__list">
          {productsList.map((item) => {
            return <Product key={item.id} props={item} />
          })}
        </ul>
      </div>
    </section>
  )
}

export default Products
