import "./Header.css";
import { useState, useEffect } from "react";
import logo from "../../images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Отслеживаем скролл для изменения стилей хедера
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Блокируем скролл body при открытом меню на мобилках
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        {/* Логотип */}
        <div className="logo">
          <a href="/">
            <img width="80" height="80" src={logo} />
          </a>
        </div>

        {/* Бургер-кнопка */}
        <button
          className={`burger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Навигация */}
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#about" onClick={closeMenu}>
                О компании
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" onClick={closeMenu}>
                Услуги
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" onClick={closeMenu}>
                Проекты
              </a>
            </li>
            <li className="nav-item">
              <a href="#contacts" onClick={closeMenu}>
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
