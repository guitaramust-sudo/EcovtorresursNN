import "./RequestSection.css";

const RequestSection = () => {
  return (
    <section className="container request-section">
      <h2 className="request-section-text h2">
        Оставьте заявку, чтобы узнать подробности и начать с нами работу
      </h2>
      <form action="#" method="post" className="request-form">
        <fieldset className="request-field">
          <div className="input-container name">
            <label htmlFor="name">Имя:</label>
            <input
              className="request-input"
              type="text"
              id="name"
              name="name"
              required
              minLength={2}
              maxLength={50}
              placeholder="Введите ваше имя"
            />
          </div>

          <div className="input-container phone">
            <label htmlFor="phone">Телефон:</label>
            <input
              className="request-input"
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
              className="request-textarea"
              id="comment"
              name="comment"
              rows={5}
              cols={40}
              maxLength={500}
              placeholder="Введите ваш комментарий (максимум 500 символов)"
              required
            />
          </div>

          <div className="confirm-button">
            <button type="submit" className="button">
              Оформить заявку
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default RequestSection;
