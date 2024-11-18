import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EducationSection = styled.section`
  margin: 6rem 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: var(--accent-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const EducationItem = styled(motion.div)`
  margin-bottom: 2rem;
  padding: var(--monospace-box-padding);
  background: var(--monospace-box-background);
  border: var(--monospace-box-border);
  border-radius: var(--monospace-box-border-radius);
`;

const Degree = styled.h3`
  font-size: 1.3rem;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
`;

const School = styled.h4`
  font-size: 1.1rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  font-size: 0.9rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  line-height: 1.6;
`;

const Certifications = styled.div`
  margin-top: 3rem;
`;

const CertificationItem = styled(motion.div)`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--monospace-box-background);
  border: var(--monospace-box-border);
  border-radius: var(--monospace-box-border-radius);
`;

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <EducationSection id="education" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <SectionTitle>Education</SectionTitle>
        
        <EducationItem variants={itemVariants}>
          <Degree>Master of Science in Information Security</Degree>
          <School>Top Technical University</School>
          <Period>2015 - 2017</Period>
          <Description>
            Specialized in advanced cybersecurity, cryptography, and secure system design. 
            Thesis focused on "Zero Trust Architecture Implementation in Enterprise Environments."
          </Description>
        </EducationItem>

        <EducationItem variants={itemVariants}>
          <Degree>Bachelor of Science in Computer Science</Degree>
          <School>Premier University</School>
          <Period>2011 - 2015</Period>
          <Description>
            Core focus on computer science fundamentals, networking, and security principles. 
            Minor in Business Administration.
          </Description>
        </EducationItem>

        <Certifications>
          <SectionTitle>Professional Certifications</SectionTitle>
          
          <CertificationItem variants={itemVariants}>
            <Degree>CISSP - Certified Information Systems Security Professional</Degree>
            <Period>2018 - Present</Period>
          </CertificationItem>

          <CertificationItem variants={itemVariants}>
            <Degree>TOGAF 9.2 Certified</Degree>
            <Period>2019 - Present</Period>
          </CertificationItem>

          <CertificationItem variants={itemVariants}>
            <Degree>AWS Certified Security - Specialty</Degree>
            <Period>2020 - Present</Period>
          </CertificationItem>

          <CertificationItem variants={itemVariants}>
            <Degree>SABSA Chartered Security Architect</Degree>
            <Period>2021 - Present</Period>
          </CertificationItem>
        </Certifications>
      </motion.div>
    </EducationSection>
  );
};

export default Education;
