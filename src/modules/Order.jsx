export const Order = () => {
  return (
    <section className="order">
      <div className="container">
        <h2 className="order__title">Доставка</h2>

        <form className="order__form">
          <input className="order__input" type="text" name="name" placeholder="Имя" />
          <input className="order__input" type="text" name="phone" placeholder="Телефон" />
          <input className="order__input order__input_address" type="text" name="address" placeholder="Адрес" />

          <fieldset className="order__payment">
            <legend className="order__payment-title">Оплата</legend>
            <label className="order__payment-label">
              <input className="order__radio" type="radio" name="payment" value="card" defaultChecked />
              Картой
            </label>
            <label className="order__payment-label">
              <input className="order__radio" type="radio" name="payment" value="сфыр" />
              Наличными
            </label>
          </fieldset>
        </form>
      </div>
    </section>
  )
}