import "./Experience.css";
import InfoCard from "./InfoCard";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();
  
  const education = [
    {
      title: t('experience.educationItems.cyber.title'),
      institution: t('experience.educationItems.cyber.institution'),
      image: "/bridge.png",
      endDate: "Abril 2025"
    },
    {
      title: t('experience.educationItems.web.title'),
      institution: t('experience.educationItems.web.institution'),
      image: "/iron.png",
      endDate: "Diciembre 2024"
    },
    {
      title: t('experience.educationItems.python.title'),
      institution: t('experience.educationItems.python.institution'),
      image: "/coursera.png",
      endDate: "Enero 2024"
    },
    {
      title: t('experience.educationItems.java.title'),
      institution: t('experience.educationItems.java.institution'),
      image: "/udemy.png",
      endDate: "Mayo 2024"
    },
    {
      title: t('experience.educationItems.ai.title'),
      institution: t('experience.educationItems.ai.institution'),
      image: "/coursera.png",
      endDate: "Octubre 2024"
    },
    {
      title: t('experience.educationItems.dam.title'),
      institution: t('experience.educationItems.dam.institution'),
      image: "/uax.png",
      endDate: "Julio 2023 / Julio 2025"
    },
    {
      title: t('experience.educationItems.business.title'),
      institution: t('experience.educationItems.business.institution'),
      image: "/ucab.png",
      endDate: "Julio 2014"
    },
    {
      title: t('experience.educationItems.highschool.title'),
      institution: t('experience.educationItems.highschool.institution'),
      image: "/salle.png",
      endDate: "Febrero 2009"
    }
  ];

  const work = [
    {
      title: "Full Stack Developer",
      company: "In the Sould",
      image: "/sould.png",
      startDate: "Enero 2025",
      endDate: t('experience.present')
    },
    {
      title: "Administración y Gestión",
      company: "Alvarez",
      image: "/alvarez.png",
      startDate: "Abril 2018",
      endDate: "Julio 2023"
    },
    {
      title: "Gestión y Protocolo",
      company: "Vincci Hoteles",
      image: "/vincci.png",
      startDate: "Enero 2017",
      endDate: "Marzo 2018"
    },
    {
      title: "Propietario y Desarrollador",
      company: "Zona Crepes",
      image: "/crepe.jpeg",
      startDate: "Junio 2014",
      endDate: "Mayo 2017"
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">{t('experience.title')}</h2>
      <h3 className="column-title">{t('experience.education')}</h3>
      <div className="exp-grid exp-grid-3">
        {education.slice(0, 3).map((item, idx) => (
          <InfoCard
            key={idx}
            image={item.image}
            main={item.title}
            sub={item.institution}
            date={item.endDate}
          />
        ))}
      </div>
      <div className="exp-grid exp-grid-3">
        {education.slice(3, 6).map((item, idx) => (
          <InfoCard
            key={idx}
            image={item.image}
            main={item.title}
            sub={item.institution}
            date={item.endDate}
          />
        ))}
      </div>
      <div className="exp-grid exp-grid-1">
        <InfoCard
          image={education[6].image}
          main={education[6].title}
          sub={education[6].institution}
          date={education[6].endDate}
        />
      </div>
      <h3 className="column-title">{t('experience.work')}</h3>
      <div className="exp-grid exp-grid-2">
        {work.slice(0, 2).map((item, idx) => (
          <InfoCard
            key={idx}
            image={item.image}
            main={item.title}
            sub={item.company}
            date={`${item.startDate} - ${item.endDate}`}
          />
        ))}
      </div>
      <div className="exp-grid exp-grid-2">
        {work.slice(2, 4).map((item, idx) => (
          <InfoCard
            key={idx}
            image={item.image}
            main={item.title}
            sub={item.company}
            date={`${item.startDate} - ${item.endDate}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience; 