import { motion } from 'framer-motion';
import tulipanImage from '../assets/images/tulipan-azul.png';

const TulipanEffect = () => {
  const tulipanes = Array(15).fill(0); // Cantidad de tulipanes
  
  return (
    <div className="tulipan-container">
      {tulipanes.map((_, index) => {
        // Aumentamos el tamaño base y rango de variación
        const size = Math.random() * 40 + 30; // Tamaño entre 30px y 70px
        const duration = Math.random() * 15 + 15; // Duración más larga
        const delay = Math.random() * 5;
        const left = Math.random() * 100;
        const rotation = Math.random() * 360;
        const opacity = Math.random() * 0.3 + 0.7; // Opacidad entre 0.7 y 1.0
        
        return (
          <motion.img
            key={index}
            src={tulipanImage}
            alt="Tulipán azul"
            className="tulipan"
            style={{
              width: `${size}px`,
              height: `${size * 1.2}px`, // Proporción más alargada
              left: `${left}%`,
              opacity: opacity,
              filter: 'drop-shadow(0 0 5px rgba(125, 181, 221, 0.7))', // Sutil brillo
              position: 'absolute',
              zIndex: 1,
            }}
            initial={{ 
              y: -size * 2, // Comienzan más arriba
              rotate: rotation,
              scale: 0.8 
            }}
            animate={{ 
              y: window.innerHeight + size,
              rotate: rotation + 180, // Giran más durante la caída
              scale: 1 
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          />
        );
      })}
    </div>
  );
};

export default TulipanEffect;