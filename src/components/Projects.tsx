import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

const ProjectsSection = styled.section`
  margin: 6rem 0 12rem 0;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin: 4rem 0 8rem 0;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const ProjectCard = styled(motion.article)`
  padding: 2rem 2rem 3rem 2rem;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  transition: transform 0.2s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 2.5rem 1.5rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

interface Project {
  titleKey: string;
  descriptionKey: string;
}

const projects: Project[] = [
  {
    titleKey: "projects.items.project1.title",
    descriptionKey: "projects.items.project1.description"
  },
  {
    titleKey: "projects.items.project2.title",
    descriptionKey: "projects.items.project2.description"
  },
  {
    titleKey: "projects.items.project3.title",
    descriptionKey: "projects.items.project3.description"
  }
];

const ProjectItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2
      }
    }
  };

  return (
    <ProjectCard
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <ProjectTitle>{t(project.titleKey)}</ProjectTitle>
      <ProjectDescription>{t(project.descriptionKey)}</ProjectDescription>
    </ProjectCard>
  );
};

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ProjectsSection id="projects" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {t('projects.title')}
      </motion.h2>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectItem key={project.titleKey} project={project} index={index} />
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
