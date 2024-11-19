import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

const CVSection = styled.section`
  margin: 6rem auto;
  max-width: 800px;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin: 4rem auto;
  }
`;

const CVTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-color);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const ExperienceItem = styled(motion.div)`
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--accent-color);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Company = styled.h4`
  font-size: 1.2rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Period = styled.p`
  font-size: 1rem;
  color: var(--secondary-color);
  font-style: italic;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    period: "2020 - Present",
    description: "Led development of key features and mentored junior developers. Implemented modern React practices and improved performance metrics."
  },
  {
    title: "Software Engineer",
    company: "Another Tech Co",
    period: "2018 - 2020",
    description: "Developed and maintained multiple web applications using React and TypeScript. Collaborated with design team to implement responsive interfaces."
  },
  {
    title: "Junior Developer",
    company: "Startup Inc",
    period: "2016 - 2018",
    description: "Started career working on full-stack applications. Gained experience with React, Node.js, and modern web development practices."
  }
];

const ExperienceItemComponent: React.FC<{ exp: Experience; index: number }> = ({ exp, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2
      }
    }
  };

  return (
    <ExperienceItem
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
    >
      <JobTitle>{exp.title}</JobTitle>
      <Company>{exp.company}</Company>
      <Period>{exp.period}</Period>
      <Description>{exp.description}</Description>
    </ExperienceItem>
  );
};

const CV: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <CVSection id="cv" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {t('cv.title')}
      </motion.h2>
      {experiences.map((exp, index) => (
        <ExperienceItemComponent key={exp.title} exp={exp} index={index} />
      ))}
    </CVSection>
  );
};

export default CV;
