import { Product } from './Product'

const products = [
  {
    id: 1,
    name: 'Кокосовая матча',
    image: 'images/photo-2.jpg',
    price: 390,
  },
  {
    id: 2,
    name: 'Чай черный Лакандона',
    image: 'images/photo-3.jpg',
    price: 340,
  },
  {
    id: 3,
    name: 'Органическая веганская матча',
    image: 'images/photo-4.jpg',
    price: 360,
  },
  {
    id: 4,
    name: 'Черный чай из Калифорнии',
    image: 'images/photo-5.jpg',
    price: 380,
  },
  {
    id: 5,
    name: 'Органическая веганская матча',
    image: 'images/photo-7.jpg',
    price: 410,
  },
  {
    id: 6,
    name: 'Чай черный Лакандона',
    image: 'images/photo-3.jpg',
    price: 340,
  },
]

export const Products = () => (
  <section className="products">
    <div className="container">
      <h2 className="products__title">Чай</h2>

      <ul className="products__list">
        {products.map((item) => (
          <Product key={item.id} data={item} />
        ))}
      </ul>
    </div>
  </section>
)
