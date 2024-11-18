import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = styled.section`
  margin: 6rem 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const AboutContent = styled(motion.div)`
  padding: 3rem;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-color);
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const Skill = styled(motion.div)`
  padding: 0.8rem;
  background: var(--accent-color);
  color: white;
  border-radius: 4px;
  font-family: 'Space Mono', monospace;
  font-size: 0.9rem;
`;

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "CSS/SCSS",
    "Git",
    "AWS",
    "Docker"
  ];

  return (
    <AboutSection>
      <AboutContent
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <AboutText>
          I'm a passionate software engineer with a keen eye for design and a love
          for creating elegant, efficient solutions to complex problems.
        </AboutText>
        <AboutText>
          With years of experience in full-stack development, I specialize in
          building modern web applications that combine beautiful interfaces with
          robust architecture.
        </AboutText>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <Skill key={index} variants={skillVariants}>
              {skill}
            </Skill>
          ))}
        </SkillsGrid>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
