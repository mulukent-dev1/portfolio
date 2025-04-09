import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faFire, faCode } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const skills = [
    { icon: faHtml5, name: 'HTML5', color: 'text-danger' },
    { icon: faCss3Alt, name: 'CSS3', color: 'text-primary' },
    { icon: faJsSquare, name: 'JavaScript', color: 'text-warning' },
    { icon: faReact, name: 'React.js', color: 'text-info' },
    { icon: faNodeJs, name: 'Node.js', color: 'text-success' },
    { icon: faJsSquare, name: 'jQuery', color: 'text-warning' },
    {
      icon: null,
      name: 'Tailwind CSS',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    },
    { icon: faTerminal, name: 'Bash', color: 'text-dark' },
    {
      icon: null,
      name: 'MongoDB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
    },
    {
      icon: null,
      name: 'MySQL',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Database-mysql.svg',
    },
    { icon: faFire, name: 'Firebase', color: 'text-warning' },
    { icon: faGitAlt, name: 'Git', color: 'text-danger' },
    { icon: faGithub, name: 'GitHub', color: 'text-dark' },
    { icon: faCode, name: 'XML', color: 'text-secondary' },
  ];

  return (
    <motion.section
      id="skills"
      className="py-5 bg-light"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <h2 className="text-center mb-5">Skills</h2>
        <div className="row text-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="col-md-3 col-6 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-item">
                {skill.icon ? (
                  <FontAwesomeIcon icon={skill.icon} className={`fa-4x ${skill.color}`} />
                ) : (
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="skill-icon"
                    style={{ width: '64px', height: '64px' }}
                  />
                )}
                <p className="mt-2">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;