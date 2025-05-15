import { motion } from 'framer-motion';
import TulipanEffect from '../components/TulipanEffect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../assets/images/profile.jpeg'; // Asegúrate de tener esta imagen

const Home = () => {
  return (
    <section id="home" className="home-section">
      <TulipanEffect />
      
      <div className="container">
        <motion.div
          className="home-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Contenedor de la foto de perfil con efectos */}
          <motion.div
            className="profile-image-container"
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
            <div className="profile-image-wrapper">
              <img 
                src={profileImage} 
                alt="Elizabeth Lastra Cierto" 
                className="profile-image"
              />
              <div className="profile-image-border"></div>
              <div className="profile-image-glow"></div>
            </div>
          </motion.div>

          <h2 className="home-subtitle">Especialista en Informática</h2>
          <h1 className="home-title">Elizabeth Lastra Cierto</h1>
          <p className="home-description">
            Soluciones tecnológicas innovadoras con un toque de elegancia y profesionalismo.
          </p>
          
          <motion.a
            href="#about"
            className="home-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faArrowDown} className="cta-icon" />
            Conóceme más
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;