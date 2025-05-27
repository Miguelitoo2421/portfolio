import { useState } from 'react';
import { Link } from 'react-scroll';
import { useLanguage } from "../context/LanguageContext";
import MobileNavButtons from './MobileNavButtons';
import "./Navbar.css";

const Navbar = () => {
  const { t, changeLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link to="hero" className="nav-logo" smooth={true} duration={500}>
              M.A Portfolio
            </Link>
            <button 
              className="lang-btn" 
              title="English"
              onClick={() => changeLanguage('en')}
            >
              <img src="/bandera-inglesa.png" alt="English" className="flag-img" />
            </button>
            <button 
              className="lang-btn" 
              title="Español"
              onClick={() => changeLanguage('es')}
            >
              <img src="/Bandera_de_España.png" alt="Español" className="flag-img" />
            </button>
          </div>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <div className="contenedor-boton">
                <span className="fondo-negro"></span>
                <Link to="hero" smooth={true} duration={500} className="boton" onClick={closeMenu}>
                  {t('nav.home')}
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="contenedor-boton">
                <span className="fondo-negro"></span>
                <Link to="about" smooth={true} duration={500} className="boton" onClick={closeMenu}>
                  {t('nav.about')}
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="contenedor-boton">
                <span className="fondo-negro"></span>
                <Link to="projects" smooth={true} duration={500} className="boton" onClick={closeMenu}>
                  {t('nav.projects')}
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="contenedor-boton">
                <span className="fondo-negro"></span>
                <Link to="experience" smooth={true} duration={500} className="boton" onClick={closeMenu}>
                  {t('nav.experience')}
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="contenedor-boton">
                <span className="fondo-negro"></span>
                <Link to="contact" smooth={true} duration={500} className="boton" onClick={closeMenu}>
                  {t('nav.contact')}
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <MobileNavButtons closeMenu={closeMenu} />
    </>
  );
};

export default Navbar; 