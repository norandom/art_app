import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import MobileNav from './MobileNav';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--header-bg);
  border-bottom: var(--monospace-box-border);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--monospace-box-padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-family: var(--monospace-font);
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--accent-color);
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  font-family: var(--monospace-font);
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.9rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--accent-color);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (hover: none) {
    &:hover::after {
      width: 0;
    }
    &:active::after {
      width: 100%;
    }
  }
`;

const LanguageSwitch = styled(motion.button)`
  font-family: var(--monospace-font);
  background: none;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background: var(--accent-color);
    color: var(--header-bg);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MainHeader: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          MC
        </Logo>
        <Nav>
          <NavLink href="#about">{t('nav.about')}</NavLink>
          <NavLink href="#education">{t('nav.education')}</NavLink>
          <NavLink href="#projects">{t('nav.projects')}</NavLink>
          <NavLink href="#cv">{t('nav.cv')}</NavLink>
          <LanguageSwitch onClick={toggleLanguage}>
            {language === 'en' ? t('header.switchToGerman') : t('header.switchToEnglish')}
          </LanguageSwitch>
        </Nav>
        <MobileNav onLanguageToggle={toggleLanguage} />
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default MainHeader;
