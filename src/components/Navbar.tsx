import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faUser, 
  faHeart, 
  faCode, 
  faBriefcase, 
  faEnvelope,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
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
    
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobileView);
    
    // Initial check
    checkMobileView();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobileView);
    };
  }, []);

  const navItems = [
    { id: 'home', icon: faHome, label: 'Inicio' },
    { id: 'about', icon: faUser, label: 'Sobre mí' },
    { id: 'interests', icon: faHeart, label: 'Intereses' },
    { id: 'skills', icon: faCode, label: 'Habilidades' },
    { id: 'experience', icon: faBriefcase, label: 'Experiencia' },
    { id: 'contact', icon: faEnvelope, label: 'Contacto' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    if (isMobileView) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.nav 
        className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileView ? 'mobile' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        style={styles.navbar}
      >
        <div className="navbar-container" style={styles.navbarContainer}>
          <motion.div 
            className="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={styles.logo}
          >
            <span className="logo-highlight" style={styles.logoHighlight}>ELI</span>
          </motion.div>
          
          {isMobileView ? (
            <>
              <motion.button
                className="mobile-menu-button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
                style={styles.mobileMenuButton}
              >
                <FontAwesomeIcon 
                  icon={isMobileMenuOpen ? faTimes : faBars} 
                  style={styles.mobileMenuIcon}
                />
              </motion.button>
              
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div 
                    className="mobile-menu"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    style={styles.mobileMenu}
                  >
                    <ul className="nav-items" style={styles.navItemsMobile}>
                      {navItems.map((item) => (
                        <li key={item.id} style={styles.navItemMobile}>
                          <a 
                            href={`#${item.id}`}
                            className={activeSection === item.id ? 'active' : ''}
                            onClick={() => handleNavClick(item.id)}
                            style={styles.navLinkMobile}
                          >
                            <motion.div
                              className="nav-item"
                              whileHover={{ 
                                x: 5,
                                color: '#7EB2DD'
                              }}
                              whileTap={{ scale: 0.95 }}
                              style={styles.navItemContent}
                            >
                              <div className="nav-icon-container" style={styles.navIconContainer}>
                                <FontAwesomeIcon 
                                  icon={item.icon} 
                                  className="nav-icon"
                                  style={styles.navIcon}
                                />
                                {activeSection === item.id && (
                                  <motion.span 
                                    className="active-indicator"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    transition={{ type: 'spring' }}
                                    style={styles.activeIndicator}
                                  />
                                )}
                              </div>
                              <span className="nav-label" style={styles.navLabel}>
                                {item.label}
                              </span>
                            </motion.div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <ul className="nav-items" style={styles.navItems}>
              {navItems.map((item) => (
                <li key={item.id} style={styles.navItemDesktop}>
                  <a 
                    href={`#${item.id}`}
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={() => handleNavClick(item.id)}
                    style={styles.navLink}
                  >
                    <motion.div
                      className="nav-item"
                      whileHover={{ 
                        y: -5,
                        color: '#7EB2DD'
                      }}
                      whileTap={{ scale: 0.95 }}
                      style={styles.navItemContent}
                    >
                      <div className="nav-icon-container" style={styles.navIconContainer}>
                        <FontAwesomeIcon 
                          icon={item.icon} 
                          className="nav-icon"
                          style={styles.navIcon}
                        />
                        <AnimatePresence>
                          {activeSection === item.id && (
                            <motion.span 
                              className="active-indicator"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              transition={{ type: 'spring' }}
                              style={styles.activeIndicator}
                            />
                          )}
                        </AnimatePresence>
                      </div>
                      <span className="nav-label" style={styles.navLabel}>
                        {item.label}
                      </span>
                    </motion.div>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

// Integrated styles with responsive design
const styles = {
  navbar: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '20px 0',
    transition: 'all 0.3s ease',
    backgroundColor: '#C8E0F4',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 30px',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#333',
  },
  logoHighlight: {
    color: '#3f51b5',
  },
  mobileMenuButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
    fontSize: '1.5rem',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobileMenuIcon: {
    fontSize: '1.8rem',
  },
  mobileMenu: {
    position: 'absolute' as const,
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#A7C7E7',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    zIndex: 999,
  },
  navItems: {
    display: 'flex',
    listStyle: 'none',
    gap: '30px',
    margin: 0,
    padding: 0,
  },
  navItemsMobile: {
    display: 'flex',
    flexDirection: 'column' as const,
    listStyle: 'none',
    gap: '15px',
    margin: 0,
    padding: 0,
  },
  navItemDesktop: {
    margin: 0,
  },
  navItemMobile: {
    margin: '10px 0',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
  },
  navLinkMobile: {
    textDecoration: 'none',
    color: '#333',
  },
  navItemContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  navIconContainer: {
    position: 'relative' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5px',
  },
  navIcon: {
    fontSize: '1.2rem',
    zIndex: 1,
  },
  activeIndicator: {
    position: 'absolute' as const,
    width: '30px',
    height: '30px',
    backgroundColor: 'rgba(126, 178, 221, 0.2)',
    borderRadius: '50%',
    zIndex: 0,
  },
  navLabel: {
    fontSize: '0.9rem',
    fontWeight: 500,
    transition: 'all 0.3s ease',
  },
  // Media queries for responsive behavior
  '@media (max-width: 768px)': {
    navbarContainer: {
      padding: '0 20px',
    },
    navItems: {
      display: 'none',
    },
  },
  '&.scrolled': {
    padding: '10px 0',
    backgroundColor: '#A7C7E7',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  },
  '&.mobile': {
    padding: '15px 0',
  },
  '&.active': {
    color: '#3f51b5',
  },
};

export default Navbar;