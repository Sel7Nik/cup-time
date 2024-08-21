import Modal from 'react-modal'
import { API_URL } from '../../const'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%,-50%)',
  },
}

Modal.setAppElement('#root')

export const ProductModal = ({ isOpen, onRequestClose, props }) => {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  if (!props) {
    return null
  }
  const images = `${API_URL}${props.img}`
  const title = props.title
  const price = props.price

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const handleIncrease = () => {
    setQuantity(quantity + 1)
  }
  const handleAddToCart = () => {
    addToCart(props, quantity)
    onRequestClose()
    //
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} contentLabel="Product Modal">
      <article className="product">
        <img className="product__image" src={images} alt={title} />
        <div className="product__content">
          <h3 className="product__title">{title}</h3>
          <p className="product__price">{price} ₽</p>
        </div>
        <ul>
          {Object.entries(props.additional).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
        <div className="modal__quantity">
          <button onClick={handleDecrease} className="modal__quantity-btn modal__quantity-btn_minus btn_minus">
            -
          </button>
          <input className="modal__quantity-input number-input" type="number" value={quantity} readOnly />
          <button onClick={handleIncrease} className="modal__quantity-btn modal__quantity-btn_plus btn_plus">
            +
          </button>
        </div>
        <button onClick={handleAddToCart}>В КОРЗИНУ</button>
        <button onClick={onRequestClose}>Закрыть</button>
      </article>
    </Modal>
  )
}
