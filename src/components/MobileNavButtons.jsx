import { Link } from 'react-scroll';
import { useLanguage } from "../context/LanguageContext";
import "./MobileNavButtons.css";

const MobileNavButtons = ({ closeMenu }) => {
  const { t } = useLanguage();

  const navItems = [
    { to: "hero", icon: "home", label: t('nav.home') },
    { to: "about", icon: "person", label: t('nav.about') },
    { to: "projects", icon: "work", label: t('nav.projects') },
    { to: "experience", icon: "business_center", label: t('nav.experience') },
    { to: "contact", icon: "mail", label: t('nav.contact') }
  ];

  return (
    <div className="mobile-nav-buttons">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          smooth={true}
          duration={500}
          className="mobile-nav-button"
          onClick={closeMenu}
          title={item.label}
        >
          <span className="material-icons">{item.icon}</span>
        </Link>
      ))}
    </div>
  );
};

export default MobileNavButtons; 