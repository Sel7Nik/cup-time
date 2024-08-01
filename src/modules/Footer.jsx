export const Footer = () => (
  <footer className="footer">
    <div className="container footer__container">
      <a className="logo footer__logo">
        <img className="logo-img" src="images/logo.svg" alt="logo-svg Cup Time" />
      </a>
      <div className="nav footer__nav">
        <ul className="menu footer__menu">
          <li className="menu-item footer__menu-item">
            <a className="menu-link footer__menu-link" href="#">
              Чай
            </a>
          </li>
          <li className="menu-item footer__menu-item">
            <a className="menu-link footer__menu-link" href="#">
              Кофе
            </a>
          </li>
          <li className="menu-item footer__menu-item">
            <a className="menu-link footer__menu-link" href="#">
              Чайники
            </a>
          </li>
          <li className="menu-item footer__menu-item">
            <a className="menu-link footer__menu-link" href="#">
              Турки
            </a>
          </li>
          <li className="menu-item footer__menu-item">
            <a className="menu-link footer__menu-link" href="#">
              Прочее
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__info">
        <p className="footer__copyright">©CUPTIME, 2024</p>
        <p className="footer__description">Проект сделан в учебных целях</p>
        <ul className="footer__developers">
          <li className="footer__developer">
            Designer:{' '}
            <a className="footer__developer-link" href="#">
              Anastasia Ilina
            </a>
          </li>
          <li className="footer__developer">
            IT Developer:{' '}
            <a className="footer__developer-link" href="#">
              Nik Name
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__contacts">
        <a className="footer__email" href="mailto:CUPTIME@gmail.com">
          CUPTIME@gmail.com
        </a>

        <ul className="social footer__social">
          <li className="social__item">
            <a className="social__link" href="#">
              <img className="social__image" src="images/vk.svg" alt="vk" />
            </a>
          </li>
          <li className="social__item">
            <a className="social__link" href="#">
              <img className="social__image" src="images/youtube.svg" alt="youtube" />
            </a>
          </li>
          <li className="social__item">
            <a className="social__link" href="#">
              <img className="social__image" src="images/telegram.svg" alt="telegram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)
