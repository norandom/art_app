import React, { useState } from 'react';
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

const ActionButton = styled(motion.a)`
  font-family: var(--monospace-font);
  background: none;
  border: 1px solid var(--accent-color);
  color: var(--text-color);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: var(--accent-color);
    color: var(--header-bg);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.3rem;
  background: var(--monospace-box-bg);
  border: 1px solid var(--accent-color);
  border-radius: 6px;
  margin-right: 0.5rem;
  align-items: center;

  ${NavLink} {
    padding: 0.3rem 0.5rem;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const ATSSwitch = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-family: var(--monospace-font);
  font-size: 0.9rem;
  color: var(--text-color);
  margin-right: 0.5rem;
  
  input {
    appearance: none;
    width: 2.2rem;
    height: 1.2rem;
    background-color: var(--monospace-box-bg);
    border: 1px solid var(--accent-color);
    border-radius: 0.6rem;
    position: relative;
    cursor: pointer;
    transition: background-color 0.2s;

    &:checked {
      background-color: var(--accent-color);
    }

    &::before {
      content: '';
      position: absolute;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      top: 50%;
      left: 0.2rem;
      transform: translateY(-50%);
      background-color: var(--text-color);
      transition: transform 0.2s;
    }

    &:checked::before {
      transform: translate(1rem, -50%);
      background-color: var(--header-bg);
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
  const [isATS, setIsATS] = useState(false);

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
          <NavLink href="#skills">{t('nav.skills')}</NavLink>
          <NavLink href="#projects">{t('nav.projects')}</NavLink>
          <ButtonGroup>
            <NavLink href="#cv">{t('nav.cv')}</NavLink>
            <ActionButton href="/assets/cv/cv.pdf" download title={t('cv.downloadPDF')}>
              PDF
            </ActionButton>
            <ActionButton href="/assets/cv/cv.docx" download title={t('cv.downloadDOCX')}>
              Word
            </ActionButton>
          </ButtonGroup>
          <ATSSwitch title="Applicant Tracking System">
            <input
              type="checkbox"
              checked={isATS}
              onChange={(e) => setIsATS(e.target.checked)}
            />
            ATS
          </ATSSwitch>
          <ActionButton href="mailto:contact@example.com" title={t('contact.email')}>
            Email
          </ActionButton>
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
