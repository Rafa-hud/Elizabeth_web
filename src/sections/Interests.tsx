import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faMusic,
  faBook,
  faPlane,
  faUtensils,
  faGamepad,
  faCamera,
  faFutbol
} from '@fortawesome/free-solid-svg-icons';

const Interests = () => {
  const interests = [
    { icon: faCode, name: 'Programación' },
    { icon: faMusic, name: 'Música' },
    { icon: faBook, name: 'Lectura' },
    { icon: faPlane, name: 'Viajar' },
    { icon: faUtensils, name: 'Cocina' },
    { icon: faGamepad, name: 'Videojuegos' },
    { icon: faCamera, name: 'Fotografía' },
    { icon: faFutbol, name: 'Deportes' }
  ];

  return (
    <section id="interests" className="interests-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Intereses</h2>
          <p className="section-subtitle">
            Estas son algunas de las cosas que me apasionan y disfruto en mi tiempo libre
          </p>
        </motion.div>

        <motion.div
          className="interests-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              className="interest-card"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="interest-icon">
                <FontAwesomeIcon icon={interest.icon} />
              </div>
              <h3 className="interest-name">{interest.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;