import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: 'Ene 2021 - Presente',
      location: 'Perú',
      description: 'Desarrollo de aplicaciones web con React, TypeScript y Redux. Lideré el equipo que implementó el nuevo dashboard de analytics con un 40% de mejora en rendimiento.',
      skills: ['React', 'TypeScript', 'Redux', 'GraphQL', 'Jest'],
      highlights: [
        'Liderazgo de equipo de 5 desarrolladores',
        'Implementación de arquitectura modular',
        'Optimización de rendimiento'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section" style={styles.section}>
      <div className="container" style={styles.container}>
        <motion.div
          className="section-header"
          style={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title" style={styles.sectionTitle}>
            Experiencia Profesional
          </h2>
          <p className="section-subtitle" style={styles.sectionSubtitle}>
            Mi trayectoria
          </p>
        </motion.div>

        <div className="experience-container" style={styles.experienceContainer}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-card"
              style={styles.experienceCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="experience-header" style={styles.experienceHeader}>
                <div className="experience-icon" style={styles.experienceIcon}>
                  <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: '1.5rem' }} />
                </div>
                <div>
                  <h3 style={styles.role}>{exp.role}</h3>
                  <h4 style={styles.company}>{exp.company}</h4>
                </div>
              </div>

              <div className="experience-meta" style={styles.experienceMeta}>
                <div style={styles.metaItem}>
                  <FontAwesomeIcon icon={faCalendarAlt} style={styles.metaIcon} />
                  <span style={styles.metaText}>{exp.period}</span>
                </div>
                <div style={styles.metaItem}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.metaIcon} />
                  <span style={styles.metaText}>{exp.location}</span>
                </div>
              </div>

              <p className="experience-description" style={styles.experienceDescription}>
                {exp.description}
              </p>

              <div className="experience-highlights" style={styles.experienceHighlights}>
                <h5 style={styles.highlightsTitle}>Logros clave:</h5>
                <ul style={styles.highlightsList}>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} style={styles.highlightItem}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="experience-skills" style={styles.experienceSkills}>
                <h5 style={styles.skillsTitle}>Tecnologías utilizadas:</h5>
                <div style={styles.skillsContainer}>
                  {exp.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      style={styles.skillTag}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Integrated styles with better spacing
const styles = {
  section: {
    padding: '100px 0',
    backgroundColor: '#f9f9f9',
    position: 'relative' as const,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 30px',
  },
  sectionHeader: {
    textAlign: 'center' as const,
    marginBottom: '70px',
  },
  sectionTitle: {
    fontSize: '2.8rem',
    fontWeight: 700,
    color: '#2c3e50',
    marginBottom: '15px',
    lineHeight: 1.2,
  },
  sectionSubtitle: {
    fontSize: '1.25rem',
    color: '#7f8c8d',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  experienceContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '50px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  experienceCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '40px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
    },
  },
  experienceHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '25px',
  },
  experienceIcon: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#3f51b5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    flexShrink: 0,
  },
  role: {
    fontSize: '1.8rem',
    fontWeight: 600,
    color: '#2c3e50',
    marginBottom: '5px',
    lineHeight: 1.3,
  },
  company: {
    fontSize: '1.3rem',
    fontWeight: 500,
    color: '#3f51b5',
    marginBottom: '0',
  },
  experienceMeta: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '20px',
    marginBottom: '25px',
    color: '#7f8c8d',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  metaIcon: {
    color: '#3f51b5',
    width: '18px',
  },
  metaText: {
    fontSize: '1.05rem',
  },
  experienceDescription: {
    color: '#555',
    lineHeight: 1.8,
    marginBottom: '30px',
    fontSize: '1.1rem',
  },
  experienceHighlights: {
    marginBottom: '30px',
  },
  highlightsTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#2c3e50',
    marginBottom: '15px',
  },
  highlightsList: {
    paddingLeft: '25px',
    margin: 0,
  },
  highlightItem: {
    marginBottom: '10px',
    color: '#555',
    lineHeight: 1.6,
    fontSize: '1.05rem',
    position: 'relative' as const,
    '&::before': {
      content: '"•"',
      color: '#3f51b5',
      fontWeight: 'bold',
      display: 'inline-block',
      width: '1em',
      marginLeft: '-1em',
      fontSize: '1.2rem',
    },
  },
  experienceSkills: {
    marginTop: '30px',
  },
  skillsTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#2c3e50',
    marginBottom: '15px',
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '12px',
  },
  skillTag: {
    backgroundColor: '#e3f2fd',
    color: '#3f51b5',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 500,
    cursor: 'default',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#3f51b5',
      color: '#fff',
    },
  },
};

export default Experience;