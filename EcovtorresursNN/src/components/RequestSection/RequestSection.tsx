import { useState } from "react";
import "./RequestSection.css";

const RequestSection = () => {
  const [isFormSent, setIsFormSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget; // ✅ сохраняем ссылку ДО await

    try {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      const response = await fetch("http://localhost:5000/send-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Успех:", result);
        setIsFormSent(true);
        form.reset(); // ✅ используем сохраненную ссылку
      } else {
        console.error("Ошибка сервера:", result);
      }
    } catch (error) {
      console.error("Ошибка отправки:", error);
    }
  };

  const handleChange = () => {
    if (isFormSent) {
      setIsFormSent(false);
    }
  };

  return (
    <section className="container request-section">
      <h2 className="request-section-text h2">
        Оставьте заявку, чтобы узнать подробности и начать с нами работу
      </h2>
      <form
        action="#"
        method="post"
        className="request-form"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <fieldset className="request-field">
          <div className="input-container name">
            <label htmlFor="nameId">Имя:</label>
            <input
              className="request-input"
              type="text"
              id="nameId"
              name="name"
              required
              minLength={2}
              maxLength={50}
              placeholder="Введите ваше имя"
            />
          </div>

          <div className="input-container phone">
            <label htmlFor="phoneId">Телефон:</label>
            <input
              className="request-input"
              type="tel"
              id="phoneId"
              name="phone"
              required
              pattern="^(\+7|8)[\d\s\-\(\)]{10,}$"
              placeholder="Введите номер телефона"
            />
          </div>

          <div className="input-container comment">
            <label htmlFor="commentId">Комментарий:</label>
            <textarea
              className="request-textarea"
              id="commentId"
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
      <h4>{isFormSent ? "Форма успешно отправлена!" : ""}</h4>
    </section>
  );
};

export default RequestSection;
