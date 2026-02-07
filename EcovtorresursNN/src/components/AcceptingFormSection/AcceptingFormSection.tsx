import "./AcceptingFormSection.css";

const AcceptingFormSection = () => {
  return (
    <section className="container contacts-section">
      <div className="contacts-info">
        <h2 className="contacts-title h2">Контакты</h2>
        <h5 className="contacts-adress">
          <span className="strong-text">Адрес:</span> Нижний Новгород, ул. В.
          Революции, д. 28, помещение 2
        </h5>
        <h5 className="contacts-phone">
          <span className="strong-text">Телефон:</span> 8 (930) 804-44-48
          <br />
          Генеральный директор Агапов Виталий Анатольевич
        </h5>
        <h5 className="contacts-email">
          <span className="strong-text">Email:</span> ecovtorresurs@bk.ru
        </h5>
      </div>
      <form action="" className="contacts-form">
        <fieldset className="contacts-field">
          <div className="input-container name">
            <label htmlFor="name">Имя:</label>
            <input
              className="contacts-request-input"
              type="text"
              id="name"
              name="name"
              required
              minLength={2}
              maxLength={50}
              placeholder="Введите ваше имя"
            />
          </div>

          <div className="input-container email">
            <label htmlFor="comment">Email:</label>
            <input
              className="contacts-request-input"
              id="email"
              name="email"
              type="email"
              placeholder="Введите вашу почту"
              required
            />
          </div>

          <div className="input-container phone">
            <label htmlFor="phone">Телефон:</label>
            <input
              className="contacts-request-input"
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="^(\+7|8)[\d\s\-\(\)]{10,}$"
              placeholder="Введите номер телефона"
            />
          </div>

          <div className="input-container comment">
            <label htmlFor="comment">Комментарий:</label>
            <textarea
              className="contacts-request-textarea"
              id="comment"
              name="comment"
              rows={5}
              cols={40}
              maxLength={500}
              placeholder="Введите ваш комментарий (максимум 500 символов)"
              required
            />
          </div>

          <div className="contacts-confirm-button">
            <button type="submit" className="contacts-button">
              Отправить
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AcceptingFormSection;
