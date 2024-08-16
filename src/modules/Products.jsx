import Product from './Product'

const Products = () => {
  const productList = [
    {
      id: 1,
      img: 'images/photo-2.jpg',
      title: 'Кокосовая матча',
      price: 390,
    },
    {
      id: 2,
      img: 'images/photo-1.jpg',
      title: 'Зеленый индонезийский чай',
      price: 340,
    },
    {
      id: 3,
      img: 'images/photo-27.jpg',
      title: 'Черный чай из Эфиопии',
      price: 380,
    },
    {
      id: 3,
      img: 'images/photo-5.jpg',
      title: 'Черный чай из Калифорнии',
      price: 360,
    },
    {
      id: 3,
      img: 'images/photo-4.jpg',
      title: 'Органическая веганская матча',
      price: 400,
    },
    {
      id: 3,
      img: 'images/photo-3.jpg',
      title: 'Чай черный Лакандона',
      price: 390,
    },
  ]
  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">Чай</h2>
        <ul className="products__list">
          {productList.map((item) => {
            return <Product key={item.id} props={item} />
          })}
        </ul>
      </div>
    </section>
  )
}

export default Products
