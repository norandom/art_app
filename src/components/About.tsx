import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  const skills = {
    'Security Architecture': [
      'Zero Trust Architecture',
      'Startup Security',
      'Agile Security Framework',
      'Security Design Patterns',
      'Risk Quantification',
      'Threat Modeling'
    ],
    'Quantitative Analysis': [
      'Security Analytics',
      'Risk Modeling',
      'Statistical Analysis',
      'Data-Driven Security',
      'Performance Metrics',
      'Security ROI Analysis'
    ],
    'Technical Expertise': [
      'Cloud Security',
      'API Security',
      'Encryption Systems',
      'Security Automation',
      'DevSecOps',
      'Secure Architecture'
    ],
    'Innovation & Leadership': [
      'International Consulting',
      'Startup Advisory',
      'Security Strategy',
      'Team Leadership',
      'Innovation Security',
      'Agile Methodologies'
    ]
  };

  return (
    <AboutSection id="about" ref={ref}>
      <SectionTitle>About Me</SectionTitle>
      <AboutContent
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <AboutText>
          Enterprise Security Architect and Quantitative Analyst with extensive experience in designing innovative security solutions for agile organizations worldwide. Specialized in combining security architecture with quantitative analysis to drive data-informed security decisions.
        </AboutText>
        <AboutText>
          Proven track record working with innovative startups and small companies across international markets, implementing efficient security frameworks that scale with rapid growth while maintaining agility. Expert in quantifying security risks and translating complex security concepts into actionable business strategies.
        </AboutText>
        <AboutText>
          Passionate about applying quantitative methods to security architecture, developing metrics-driven security programs, and creating adaptive security frameworks for fast-moving organizations. Strong focus on innovation and practical security solutions that enable business growth.
        </AboutText>

        {Object.entries(skills).map(([category, skillList]) => (
          <SkillCategory key={category}>
            <CategoryTitle>{category}</CategoryTitle>
            <SkillsGrid>
              {skillList.map((skill) => (
                <Skill
                  key={skill}
                  variants={itemVariants}
                >
                  {skill}
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
