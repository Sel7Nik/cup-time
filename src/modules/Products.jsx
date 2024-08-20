import Product from './Product'
import { useProducts } from '../context/productContext'
import { useEffect } from 'react'

export const Products = () => {
  const category = 'tea'
  const { products, setCategory } = useProducts()
  const productsList = products

  useEffect(() => {
    setCategory(category)
    return () => {}
  }, [category, setCategory])
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
