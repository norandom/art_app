import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

const AboutSection = styled.section`
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

const AboutContent = styled(motion.div)`
  padding: var(--monospace-box-padding);
  background: var(--monospace-box-background);
  border: var(--monospace-box-border);
  border-radius: var(--monospace-box-border-radius);
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const SkillCategory = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
`;

const Skill = styled(motion.div)`
  padding: 0.8rem;
  background: var(--accent-color);
  color: white;
  border-radius: var(--monospace-box-border-radius);
  font-size: 0.9rem;
  text-align: center;
`;

const About: React.FC = () => {
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

  const skillCategories = [
    {
      key: 'securityarchitecture',
      skills: [
        'zerotrustarchitecture',
        'startupsecurity',
        'agilesecurityframework',
        'securitydesignpatterns',
        'riskquantification',
        'threatmodeling'
      ]
    },
    {
      key: 'quantitativeanalysis',
      skills: [
        'securityanalytics',
        'riskmodeling',
        'statisticalanalysis',
        'datadrivensecurity',
        'performancemetrics',
        'securityroianalysis'
      ]
    },
    {
      key: 'technicalexpertise',
      skills: [
        'cloudsecurity',
        'apisecurity',
        'encryptionsystems',
        'securityautomation',
        'devsecops',
        'securearchitecture'
      ]
    },
    {
      key: 'innovationleadership',
      skills: [
        'internationalconsulting',
        'startupadvisory',
        'securitystrategy',
        'teamleadership',
        'innovationsecurity',
        'agilemethodologies'
      ]
    }
  ];

  return (
    <AboutSection id="about" ref={ref}>
      <SectionTitle>{t('about.title')}</SectionTitle>
      <AboutContent
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <AboutText>
          {t('about.description')}
        </AboutText>

        {skillCategories.map(({ key, skills }) => (
          <SkillCategory key={key}>
            <CategoryTitle>{t(`skills.${key}`)}</CategoryTitle>
            <SkillsGrid>
              {skills.map((skill) => (
                <Skill
                  key={skill}
                  variants={itemVariants}
                >
                  {t(`skills.items.${skill}`)}
                </Skill>
              ))}
            </SkillsGrid>
          </SkillCategory>
        ))}
      </AboutContent>
    </AboutSection>
  );
};

export default About;
