import { motion } from 'framer-motion';
import TulipanEffect from '../components/TulipanEffect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../assets/images/profile.jpeg';

const Home = () => {
  return (
    <section id="home" className="home-section" style={styles.section}>
      <TulipanEffect />
      
      <div className="container" style={styles.container}>
        <motion.div
          className="home-content"
          style={styles.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Contenedor de la foto de perfil con efectos */}
          <motion.div
            className="profile-image-container"
            style={styles.profileContainer}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="profile-image-wrapper" style={styles.profileWrapper}>
              <img 
                src={profileImage} 
                alt="Elizabeth Lastra Cierto" 
                className="profile-image"
                style={styles.profileImage}
              />
              <div className="profile-image-border" style={styles.profileBorder}></div>
              <div className="profile-image-glow" style={styles.profileGlow}></div>
            </div>
          </motion.div>

          <h2 className="home-subtitle" style={styles.subtitle}>Especialista en Informática</h2>
          <h1 className="home-title" style={styles.title}>Elizabeth Lastra Cierto</h1>
          <p className="home-description" style={styles.description}>
            Soluciones tecnológicas innovadoras con un toque de elegancia y profesionalismo.
          </p>
          
          <motion.a
            href="#about"
            className="home-cta"
            style={styles.cta}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faArrowDown} className="cta-icon" style={styles.ctaIcon} />
            Conóceme más
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// Responsive styles
const styles = {
  section: {
    position: 'relative' as const,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '80px 0',
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    padding: '0 20px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  content: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    textAlign: 'center' as const,
    width: '100%',
  },
  profileContainer: {
    marginBottom: '30px',
  },
  profileWrapper: {
    position: 'relative' as const,
    width: '250px',
    height: '250px',
    '@media (max-width: 768px)': {
      width: '200px',
      height: '200px',
    },
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover' as const,
    position: 'relative' as const,
    zIndex: 2,
  },
  profileBorder: {
    position: 'absolute' as const,
    top: '-10px',
    left: '-10px',
    right: '-10px',
    bottom: '-10px',
    borderRadius: '50%',
    border: '3px solid #3f51b5',
    zIndex: 1,
    animation: 'rotate 20s linear infinite',
  },
  profileGlow: {
    position: 'absolute' as const,
    top: '-15px',
    left: '-15px',
    right: '-15px',
    bottom: '-15px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(63,81,181,0.3) 0%, rgba(63,81,181,0) 70%)',
    zIndex: 0,
  },
  subtitle: {
    fontSize: '1.5rem',
    fontWeight: 400,
    color: '#555',
    marginBottom: '10px',
    '@media (max-width: 768px)': {
      fontSize: '1.2rem',
    },
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 700,
    color: '#333',
    marginBottom: '20px',
    lineHeight: 1.2,
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '2rem',
    },
  },
  description: {
    fontSize: '1.25rem',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto 30px',
    lineHeight: 1.6,
    '@media (max-width: 768px)': {
      fontSize: '1.1rem',
      padding: '0 20px',
    },
  },
  cta: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3f51b5',
    color: '#fff',
    padding: '12px 30px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(63, 81, 181, 0.3)',
    '@media (max-width: 768px)': {
      padding: '10px 25px',
      fontSize: '1rem',
    },
  },
  ctaIcon: {
    marginRight: '10px',
    fontSize: '1rem',
  },
  '@keyframes rotate': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
};

export default Home;