import Product from './Product'
import { useProducts } from '../context/productContext'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SkeletonLoader } from './SkeletonLoader'

export const Products = () => {
  const { products, setCategory } = useProducts()
  const [searchParams] = useSearchParams()
  const productsList = products
  const category = searchParams.get('category')

  useEffect(() => {
    setCategory(category)
    return () => {}
  }, [category, setCategory])
  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">Чай</h2>
        <ul className="products__list">
          {productsList.length ? (
            productsList.map((item) => {
              return <Product key={item.id} props={item} />
            })
          ) : (
            <SkeletonLoader />
          )}
        </ul>
      </div>
    </section>
  )
}
