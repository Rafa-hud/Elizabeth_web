import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaperPlane,
  faUser,
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedinIn, 
  faGithubAlt, 
  faTwitter as faTwitterBrand 
} from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Configura tus credenciales de EmailJS aquí
      await emailjs.send(
        'YOUR_SERVICE_ID', // Reemplaza con tu Service ID
        'YOUR_TEMPLATE_ID', // Reemplaza con tu Template ID
        formData,
        'YOUR_PUBLIC_KEY' // Reemplaza con tu Public Key
      );

      setSubmitStatus({
        success: true,
        message: '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Hubo un error al enviar el mensaje. Por favor inténtalo de nuevo más tarde.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <FontAwesomeIcon icon={faPaperPlane} className="title-icon" />
            Contacto
          </h2>
          <p className="section-subtitle">
            ¿Tienes alguna pregunta o quieres trabajar conmigo? ¡Envíame un mensaje!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <FontAwesomeIcon icon={faPaperPlane} className="input-icon" />
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} className="button-icon" />
                    Enviar Mensaje
                  </>
                )}
              </motion.button>

              {submitStatus && (
                <motion.div
                  className={`status-message ${submitStatus.success ? 'success' : 'error'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitStatus.message}
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            className="contact-info-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="info-title">Información de Contacto</h3>
            
            <div className="contact-info-item">
              <div className="info-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="info-text">
                <h4>Ubicación</h4>
                <p>Perú</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <p></p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="info-text">
                <h4>Teléfono</h4>
                <p>+51 987 654 321</p>
              </div>
            </div>

            <div className="social-links">
              <h4>Conéctate conmigo</h4>
              <div className="social-icons">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithubAlt} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitterBrand} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;