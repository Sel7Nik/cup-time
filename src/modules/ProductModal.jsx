import Modal from 'react-modal'
import { API_URL } from '../../const'
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
  const images = `${API_URL}${props.img}`
  const title = props.title
  const price = props.price
  if (!props) {
    return null
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
        <button onClick={onRequestClose}>Закрыть</button>
      </article>
    </Modal>
  )
}
