import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faUser, 
  faHeart, 
  faCode, 
  faBriefcase, 
  faEnvelope 
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Detectar scroll para efecto de navbar flotante
      setIsScrolled(window.scrollY > 50);
      
      // Detectar sección activa
      const sections = ['home', 'about', 'interests', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: faHome, label: 'Inicio' },
    { id: 'about', icon: faUser, label: 'Sobre mí' },
    { id: 'interests', icon: faHeart, label: 'Intereses' },
    { id: 'skills', icon: faCode, label: 'Habilidades' },
    { id: 'experience', icon: faBriefcase, label: 'Experiencia' },
    { id: 'contact', icon: faEnvelope, label: 'Contacto' },
  ];

  return (
    <AnimatePresence>
      <motion.nav 
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="navbar-container">
          <motion.div 
            className="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="logo-highlight">ELI</span>
          </motion.div>
          
          <ul className="nav-items">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  <motion.div
                    className="nav-item"
                    whileHover={{ 
                      y: -5,
                      color: '#7EB2DD'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="nav-icon-container">
                      <FontAwesomeIcon 
                        icon={item.icon} 
                        className="nav-icon"
                      />
                      <AnimatePresence>
                        {activeSection === item.id && (
                          <motion.span 
                            className="active-indicator"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ type: 'spring' }}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                    <span className="nav-label">{item.label}</span>
                  </motion.div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;