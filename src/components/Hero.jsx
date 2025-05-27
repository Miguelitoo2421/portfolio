import { FaCopy } from 'react-icons/fa'
import { useLanguage } from "../context/LanguageContext";
import TypewriterText from './TypewriterText';
import './Hero.css'

const Hero = () => {
  const { t } = useLanguage();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pontellsma@gmail.com');
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <img 
              src="/placeholder-profile.jpg" 
              alt="Miguel Angel Ponte Llabrés" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 70%' }}
            />
          </div>
          <div className="hero-text">
            <h1>
              <TypewriterText text={`${t('hero.greeting')} Miguel Ponte.`} />
            </h1>
            <h2>{t('hero.role')}</h2>
            <div className="contenedor-boton">
              <span className="fondo-negro"></span>
              <a
                href="/CV_MIGUEL_2025.pdf"
                className="boton"
                download
              >
                {t('about.download')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 