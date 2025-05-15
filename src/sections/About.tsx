import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserTie, 
  faLaptopCode, 
  faGraduationCap,
  faMapMarkerAlt,
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const personalInfo = [
    { icon: faUserTie, label: "Profesión", value: "Ingeniera de Sistemas" },
    { icon: faGraduationCap, label: "Educación", value: "Maestría en TI" },
    { icon: faMapMarkerAlt, label: "Ubicación", value: "Perú" },
    { icon: faEnvelope, label: "Email", value: "" },
    { icon: faPhone, label: "Teléfono", value: "----" }
  ];

  const skills = [
    { name: "Desarrollo Web", level: 90 },
    { name: "Bases de Datos", level: 85 },
    { name: "Cloud Computing", level: 80 },
    { name: "Inteligencia Artificial", level: 75 },
    { name: "Ciberseguridad", level: 70 }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            <FontAwesomeIcon icon={faUserTie} className="title-icon" />
            Sobre Mí
          </h2>
          <p className="section-subtitle">Conoce más sobre mi trayectoria profesional</p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="personal-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="info-title">Información Personal</h3>
            <ul className="info-list">
              {personalInfo.map((item, index) => (
                <li key={index} className="info-item">
                  <div className="info-icon">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div className="info-text">
                    <span className="info-label">{item.label}:</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="about-bio">
              <h4 className="bio-title">Mi Enfoque</h4>
              <p className="bio-text">
                Como profesional en informática, combino conocimiento técnico avanzado con 
                una perspectiva estratégica para desarrollar soluciones innovadoras que 
                impulsen el éxito empresarial.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="skills-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="skills-title">
              <FontAwesomeIcon icon={faLaptopCode} className="title-icon" />
              Mis Habilidades
            </h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;