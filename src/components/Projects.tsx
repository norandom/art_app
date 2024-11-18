import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectsSection = styled.section`
  margin: 6rem 0;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.article)`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--accent-color);
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: var(--secondary-color);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-color);
  text-align: center;
`;

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A brief description of your first project. What technologies did you use? What problems did you solve?"
  },
  {
    title: "Project Two",
    description: "Description of your second project. Highlight the key features and your role in development."
  },
  {
    title: "Project Three",
    description: "Details about your third project. What makes it unique? What did you learn?"
  }
];

const ProjectItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
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
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
    </ProjectCard>
  );
};

const Projects: React.FC = () => {
  return (
    <ProjectsSection>
      <SectionTitle>Projects</SectionTitle>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
