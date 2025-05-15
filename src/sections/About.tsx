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
    <section id="about" className="about-section" style={styles.section}>
      <div className="container" style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
          style={styles.sectionHeader}
        >
          <h2 className="section-title" style={styles.sectionTitle}>
            <FontAwesomeIcon icon={faUserTie} className="title-icon" style={styles.titleIcon} />
            Sobre Mí
          </h2>
          <p className="section-subtitle" style={styles.sectionSubtitle}>
            Conoce más sobre mi trayectoria profesional
          </p>
        </motion.div>

        <div className="about-content" style={styles.aboutContent}>
          <motion.div 
            className="personal-info"
            style={styles.personalInfo}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="info-title" style={styles.infoTitle}>Información Personal</h3>
            <ul className="info-list" style={styles.infoList}>
              {personalInfo.map((item, index) => (
                <li key={index} className="info-item" style={styles.infoItem}>
                  <div className="info-icon" style={styles.infoIcon}>
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div className="info-text" style={styles.infoText}>
                    <span className="info-label" style={styles.infoLabel}>{item.label}:</span>
                    <span className="info-value" style={styles.infoValue}>{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="about-bio" style={styles.aboutBio}>
              <h4 className="bio-title" style={styles.bioTitle}>Mi Enfoque</h4>
              <p className="bio-text" style={styles.bioText}>
                Como profesional en informática, combino conocimiento técnico avanzado con 
                una perspectiva estratégica para desarrollar soluciones innovadoras que 
                impulsen el éxito empresarial.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="skills-section"
            style={styles.skillsSection}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="skills-title" style={styles.skillsTitle}>
              <FontAwesomeIcon icon={faLaptopCode} className="title-icon" style={styles.titleIcon} />
              Mis Habilidades
            </h3>
            <div className="skills-container" style={styles.skillsContainer}>
              {skills.map((skill, index) => (
                <div key={index} className="skill-item" style={styles.skillItem}>
                  <div className="skill-info" style={styles.skillInfo}>
                    <span className="skill-name" style={styles.skillName}>{skill.name}</span>
                    <span className="skill-percent" style={styles.skillPercent}>{skill.level}%</span>
                  </div>
                  <div className="skill-bar" style={styles.skillBar}>
                    <motion.div
                      className="skill-progress"
                      style={{ 
                        ...styles.skillProgress,
                        backgroundColor: '#3f51b5',
                      }}
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

// Responsive styles
const styles = {
  section: {
    padding: '80px 0',
    backgroundColor: '#f9f9f9',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  sectionHeader: {
    textAlign: 'center' as const,
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#333',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
  },
  titleIcon: {
    fontSize: '1.5rem',
    color: '#3f51b5',
  },
  sectionSubtitle: {
    fontSize: '1.1rem',
    color: '#666',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  aboutContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    '@media (max-width: 992px)': {
      gridTemplateColumns: '1fr',
      gap: '50px',
    },
  },
  personalInfo: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
  },
  infoTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#3f51b5',
    marginBottom: '25px',
    position: 'relative' as const,
    paddingBottom: '10px',
    '&::after': {
      content: '""',
      position: 'absolute' as const,
      bottom: 0,
      left: 0,
      width: '50px',
      height: '3px',
      backgroundColor: '#3f51b5',
    },
  },
  infoList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 30px 0',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    paddingBottom: '15px',
    borderBottom: '1px solid #eee',
    '&:last-child': {
      marginBottom: 0,
      paddingBottom: 0,
      borderBottom: 'none',
    },
  },
  infoIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '15px',
    color: '#3f51b5',
    flexShrink: 0,
    '@media (max-width: 480px)': {
      width: '35px',
      height: '35px',
      fontSize: '0.9rem',
    },
  },
  infoText: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  infoLabel: {
    fontSize: '0.9rem',
    color: '#777',
    marginBottom: '3px',
  },
  infoValue: {
    fontSize: '1rem',
    fontWeight: 500,
    color: '#333',
  },
  aboutBio: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
  },
  bioTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#3f51b5',
    marginBottom: '15px',
  },
  bioText: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: 1.7,
    margin: 0,
  },
  skillsSection: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
  },
  skillsTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#3f51b5',
    marginBottom: '25px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    position: 'relative' as const,
    paddingBottom: '10px',
    '&::after': {
      content: '""',
      position: 'absolute' as const,
      bottom: 0,
      left: 0,
      width: '50px',
      height: '3px',
      backgroundColor: '#3f51b5',
    },
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  },
  skillItem: {
    marginBottom: '15px',
  },
  skillInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  skillName: {
    fontSize: '1rem',
    fontWeight: 500,
    color: '#333',
  },
  skillPercent: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#3f51b5',
  },
  skillBar: {
    height: '10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  skillProgress: {
    height: '100%',
    borderRadius: '5px',
  },
};

export default About;