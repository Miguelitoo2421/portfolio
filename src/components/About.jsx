import { useLanguage } from "../context/LanguageContext";
import "./About.css";

const About = () => {
  const { t } = useLanguage();
  const technologies = [
    "/html.png",
    "/css.png",
    "/javascript.png",
    "/VSCODE.png",
    "/Tailwind.png",
    "/php.png",
    "/mysql.png",
    "/Laravel.png",
    "/git.png"
  ];

  // Creamos una secuencia perfectamente continua
  const continuousTechnologies = [
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies
  ];

  return (
    <section id="about" className="about">
      <h2>{t('about.title')}</h2>
      <div className="about-container">
        <div className="about-card">
          {t('about.description').map((paragraph, index) => (
            <div key={index} className="about-paragraph">
              <p>{paragraph}</p>
            </div>
          ))}
        </div>
        <div className="technologies-marquee">
          <div className="marquee-content">
            {continuousTechnologies.map((tech, index) => (
              <div key={index} className="tech-item">
                <img src={tech} alt="technology" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 