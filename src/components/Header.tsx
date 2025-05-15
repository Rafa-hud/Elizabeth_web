import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <motion.header 
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="logo-container">
          <FontAwesomeIcon icon={faLaptopCode} className="logo-icon" />
          <h1>Elizabeth Lastra Cierto</h1>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;