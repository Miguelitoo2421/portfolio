import { useLanguage } from "../context/LanguageContext";
import "./Projects.css";

const Projects = () => {
  const { t } = useLanguage();
  
  // Array de proyectos
  // Para agregar un nuevo proyecto:
  // 1. Agregar las traducciones en translations.js bajo projects.items
  // 2. Agregar el nuevo objeto aquí siguiendo la misma estructura
  // 3. Agregar las imágenes en la carpeta public
  // 4. Agregar los iconos de tecnologías en la carpeta public
  const projects = [
    {
      id: 1,
      title: t('projects.items.crazyFrog.title'),
      image: "/crazy_frog.png",
      description: t('projects.items.crazyFrog.description'),
      technologies: [
        "/html.png",
        "/css.png",
        "/javascript.png",
        "/VSCODE.png"
      ]
    },
    {
      id: 2,
      title: t('projects.items.marvelPlays.title'),
      image: "/Marvel_plays.png",
      description: t('projects.items.marvelPlays.description'),
      technologies: [
        "/Tailwind.png",
        "/css.png",
        "/html.png",
        "/php.png",
        "/mysql.png",
        "/Laravel.png",
        "/git.png",
        "/javascript.png"
      ]
    }
    // Nuevo proyecto ejemplo:
    // {
    //   id: 3,
    //   title: t('projects.items.nuevoProyecto.title'),
    //   image: "/nuevo_proyecto.png",
    //   description: t('projects.items.nuevoProyecto.description'),
    //   technologies: [
    //     "/tecnologia1.png",
    //     "/tecnologia2.png",
    //     // ... más tecnologías
    //   ]
    // }
  ];

  return (
    <section id="projects" className="projects">
      <h2>{t('projects.title')}</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="tech-icon">
                    <img src={tech} alt="technology" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 