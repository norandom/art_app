import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const HeaderContainer = styled.header`
  margin: 4rem 0;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--accent-color);
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--secondary-color);
  max-width: 600px;
  margin: 0 auto;
`;

const Header: React.FC = () => {
  const { t } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <HeaderContainer>
      <Title
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {translations.en.header.name}
      </Title>
      <Subtitle
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ delay: 0.2 }}
      >
        {t('about.role')}
      </Subtitle>
    </HeaderContainer>
  );
};

export default Header;
