import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./SocialIcons.css";

const SocialIcons = () => {
  const whatsappNumber = "34642578307";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const githubUrl = "https://github.com/Miguelitoo2421";
  const linkedinUrl = "https://www.linkedin.com/in/pontellabres";

  return (
    <div className="social-icons">
      <a 
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon github"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a 
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon linkedin"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon whatsapp"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default SocialIcons; 