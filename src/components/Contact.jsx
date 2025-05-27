import { useLanguage } from "../context/LanguageContext";
import { FaEnvelope, FaCopy, FaPhone } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const { t } = useLanguage();
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pontellsma@gmail.com');
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('642578307');
  };

  return (
    <section id="contact" className="contact">
      <h2>{t('contact.title')}</h2>
      <div className="contact-content">
        <p>{t('contact.description')}</p>
        <div className="contact-info">
          <div className="email-container">
            <FaEnvelope className="email-icon" />
            <p>pontellsma@gmail.com</p>
            <button 
              onClick={handleCopyEmail}
              className="copy-button"
              title={t('contact.copyEmail')}
            >
              <FaCopy />
            </button>
          </div>
          <div className="email-container">
            <FaPhone className="email-icon" />
            <p>+34 642578307</p>
            <button 
              onClick={handleCopyPhone}
              className="copy-button"
              title={t('contact.copyPhone')}
            >
              <FaCopy />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 