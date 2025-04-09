import React, { useState, useEffect } from 'react'; 
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Alert from './Alert'; 

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success'); // 'success' or 'error'

  // Auto-hide the alert after 3 seconds
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000); 
      return () => clearTimeout(timer); 
    }
  }, [showAlert]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'messages'), {
        name,
        email,
        message,
        timestamp: new Date(),
      });
      
      setAlertMessage('Message sent successfully!');
      setAlertType('success');
      setShowAlert(true);
     
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message: ', error);
     
      setAlertMessage('Failed to send message. Please try again.');
      setAlertType('error');
      setShowAlert(true);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <div className="row">
          {/* Contact Form */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </motion.div>
          {/* Social Media Links */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3>Let’s Build Something Great Together!</h3>
            <p>Whether you’re a startup, a growing business, or an established company, I’d love to help bring your ideas to life. Let’s connect and discuss how we can create something amazing.</p>
            <div className="mt-4">
              <a href="#contact" className="btn btn-primary">Contact Me</a>
              <a href="#work" className="btn btn-outline-primary ms-3">View My Projects</a>
            </div>
            {/* Social Links */}
            <div className="social-links mt-5">
              {/* Twitter (X) */}
              <a href="https://x.com/Muluken_dev" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-lg m-2">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  style={{ verticalAlign: 'middle' }}
                >
                  <title>X (Twitter)</title>
                  <path
                    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                  />
                </svg>
                Twitter
              </a>
              {/* Email */}
              <a href="mailto:contactmuluken@gmail.com" className="btn btn-outline-dark btn-lg m-2">
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/muluken-tessema-787285348/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-lg m-2">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
              {/* GitHub */}
              <a href="https://github.com/mulukent-dev1" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-lg m-2">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/mulukent_dev/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-lg m-2">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom Alert */}
      {showAlert && (
        <Alert
          message={alertMessage}
          type={alertType}
          onClose={() => setShowAlert(false)}
        />
      )}
    </motion.section>
  );
};

export default Contact;