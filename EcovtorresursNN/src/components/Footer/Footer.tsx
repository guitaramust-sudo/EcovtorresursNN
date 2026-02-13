import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-grid">
          {/* Компания */}
          <div className="footer-col">
            <h3 className="footer-title">ООО "Эковторресурс"</h3>
            <p className="footer-text">
              Общество с ограниченной ответственностью
            </p>
            <p className="footer-text">ИНН 5263133000</p>
            <p className="footer-text">ОГРН 1175275067054</p>
            <p className="footer-text">КПП 526301001</p>
          </div>

          {/* Адрес */}
          <div className="footer-col">
            <h3 className="footer-title">Юридический адрес</h3>
            <p className="footer-text">
              603054, Нижегородская обл,
              <br />
              Нижний Новгород г, Вождей Революции ул,
              <br />
              дом № 28, помещение 2
            </p>
          </div>

          {/* Контакты */}
          <div className="footer-col">
            <h3 className="footer-title">Контакты</h3>
            <p className="footer-text">Директор: Багаев Иван Владимирович</p>
            <a href="tel:+79200396398" className="footer-link">
              Телефон: 8 (920) 039-63-98
            </a>
          </div>

          {/* Реквизиты */}
          <div className="footer-col">
            <h3 className="footer-title">Реквизиты</h3>
            <p className="footer-text">р/с 40702810700490000482</p>
            <p className="footer-text">
              Филиал "Центральный"
              <br />
              Банка ВТБ (ПАО)
            </p>
            <p className="footer-text">БИК 044525411</p>
            <p className="footer-text">к/с 30101810145250000411</p>
          </div>
        </div>

        {/* Копирайт */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} ООО "Эковторресурс". Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
