import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faGitAlt,
  faPython
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faMobileAlt, faServer } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const skills = [
    { icon: faReact, name: '', level: 0, color: '#61DAFB' },
    { icon: faJs, name: '', level: 0, color: '#F7DF1E' },
    { icon: faHtml5, name: '', level: 0, color: '#E34F26' },
    { icon: faCss3Alt, name: '', level: 0, color: '#1572B6' },
    { icon: faNodeJs, name: '', level: 0, color: '#339933' },
    { icon: faPython, name: '', level: 0, color: '#3776AB' },
    { icon: faDatabase, name: '', level: 0, color: '#47A248' },
    { icon: faGitAlt, name: '', level: 0, color: '#F05032' },
    { icon: faMobileAlt, name: '', level: 0, color: '#61DAFB' },
    { icon: faServer, name: '', level: 0, color: '#000000' }
  ];

  // Radial chart component
  const RadialChart = ({ level, color }: { level: number; color: string }) => {
    const circumference = 2 * Math.PI * 40;
    const strokeDashoffset = circumference - (level / 100) * circumference;

    return (
      <motion.div 
        className="radial-chart"
        initial={{ rotate: -90, scale: 0.8 }}
        whileInView={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle
            className="radial-chart-background"
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#f0f0f0"
            strokeWidth="8"
          />
          <motion.circle
            className="radial-chart-progress"
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            transition={{ duration: 1.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <text
            x="50"
            y="50"
            textAnchor="middle"
            dominantBaseline="middle"
            className="radial-chart-percent"
            fill={color}
          >
            {level}%
          </text>
        </svg>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="skills-section" style={styles.section}>
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
            Habilidades Técnicas
          </h2>
          <p className="section-subtitle" style={styles.sectionSubtitle}>
            Mi nivel de dominio en diferentes tecnologías y herramientas
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          style={styles.skillsGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              style={styles.skillCard}
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-content" style={styles.skillContent}>
                <RadialChart level={skill.level} color={skill.color} />
                <div className="skill-info" style={styles.skillInfo}>
                  <div className="skill-icon" style={{ color: skill.color, ...styles.skillIcon }}>
                    <FontAwesomeIcon icon={skill.icon} />
                  </div>
                  <h3 className="skill-name" style={styles.skillName}>{skill.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Integrated styles
const styles = {
  section: {
    padding: '80px 0',
    backgroundColor: '#f9f9f9',
    position: 'relative' as const,
    overflow: 'hidden' as const
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    position: 'relative' as const
  },
  sectionHeader: {
    textAlign: 'center' as const,
    marginBottom: '60px'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#333',
    marginBottom: '15px',
    position: 'relative' as const,
    display: 'inline-block'
  },
  sectionSubtitle: {
    fontSize: '1.1rem',
    color: '#666',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: 1.6
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '30px',
    justifyContent: 'center'
  },
  skillCard: {
    backgroundColor: '#fff',
    borderRadius: '15px',
    padding: '25px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    textAlign: 'center' as const
  },
  skillContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  skillInfo: {
    marginTop: '20px',
    textAlign: 'center' as const
  },
  skillIcon: {
    fontSize: '2.5rem',
    marginBottom: '10px'
  },
  skillName: {
    fontSize: '1.2rem',
    fontWeight: 600,
    margin: '10px 0 0',
    color: '#333'
  },
  // Radial chart styles
  radialChart: {
    width: '100px',
    height: '100px',
    margin: '0 auto'
  },
  radialChartBackground: {
    fill: 'none',
    stroke: '#f0f0f0',
    strokeWidth: '8'
  },
  radialChartProgress: {
    fill: 'none',
    strokeWidth: '8',
    strokeLinecap: 'round',
    transform: 'rotate(-90deg)',
    transformOrigin: '50% 50%'
  },
  radialChartPercent: {
    fontSize: '20px',
    fontWeight: 'bold'
  }
};

export default Skills;