import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

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
  const { t } = useLanguage();
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
        <SectionTitle>{t('education.title')}</SectionTitle>
        
        <EducationItem variants={itemVariants}>
          <Degree>{t('education.masters.degree')}</Degree>
          <School>{t('education.masters.school')}</School>
          <Period>{t('education.masters.period')}</Period>
          <Description>
            {t('education.masters.description')}
          </Description>
        </EducationItem>

        <EducationItem variants={itemVariants}>
          <Degree>{t('education.bachelors.degree')}</Degree>
          <School>{t('education.bachelors.school')}</School>
          <Period>{t('education.bachelors.period')}</Period>
          <Description>
            {t('education.bachelors.description')}
          </Description>
        </EducationItem>

        <Certifications>
          <SectionTitle>{t('education.certifications.title')}</SectionTitle>
          
          <CertificationItem variants={itemVariants}>
            <Degree>{t('education.certifications.cissp.degree')}</Degree>
            <Period>{t('education.certifications.cissp.period')}</Period>
          </CertificationItem>

          <CertificationItem variants={itemVariants}>
            <Degree>{t('education.certifications.togaf.degree')}</Degree>
            <Period>{t('education.certifications.togaf.period')}</Period>
          </CertificationItem>

          <CertificationItem variants={itemVariants}>
            <Degree>{t('education.certifications.aws.degree')}</Degree>
            <Period>{t('education.certifications.aws.period')}</Period>
          </CertificationItem>

          <CertificationItem variants={itemVariants}>
            <Degree>{t('education.certifications.sabsa.degree')}</Degree>
            <Period>{t('education.certifications.sabsa.period')}</Period>
          </CertificationItem>
        </Certifications>
      </motion.div>
    </EducationSection>
  );
};

export default Education;
