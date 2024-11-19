import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
  }
`;

const HamburgerLine = styled.span<{ $isOpen: boolean }>`
  width: 2rem;
  height: 0.25rem;
  background: var(--accent-color);
  transition: all 0.3s ease;
  transform-origin: 1px;

  &:first-child {
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg)' : 'rotate(0)'};
  }

  &:nth-child(2) {
    opacity: ${({ $isOpen }) => $isOpen ? '0' : '1'};
    transform: ${({ $isOpen }) => $isOpen ? 'translateX(20px)' : 'translateX(0)'};
  }

  &:last-child {
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--header-bg);
  z-index: 1000;
  padding: 5rem 2rem 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MobileMenuContent = styled(motion.div)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const MobileNavLink = styled(motion.a)`
  font-family: var(--monospace-font);
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.2rem;
  text-align: center;
`;

const LanguageSwitchMobile = styled(motion.button)`
  font-family: var(--monospace-font);
  background: none;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background: var(--accent-color);
    color: var(--header-bg);
  }
`;

interface MobileNavProps {
  onLanguageToggle: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ onLanguageToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1
      }
    })
  };

  return (
    <>
      <HamburgerButton 
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <HamburgerLine $isOpen={isOpen} />
        <HamburgerLine $isOpen={isOpen} />
        <HamburgerLine $isOpen={isOpen} />
      </HamburgerButton>

      <AnimatePresence>
        {isOpen && (
          <MobileMenuOverlay
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            {['about', 'education', 'projects', 'cv'].map((item, i) => (
              <MobileNavLink
                key={item}
                href={`#${item}`}
                onClick={handleLinkClick}
                custom={i}
                variants={linkVariants}
              >
                {t(`nav.${item}`)}
              </MobileNavLink>
            ))}
            <LanguageSwitchMobile
              onClick={() => {
                onLanguageToggle();
                handleLinkClick();
              }}
              variants={linkVariants}
              custom={4}
            >
              {language === 'en' ? t('header.switchToGerman') : t('header.switchToEnglish')}
            </LanguageSwitchMobile>
          </MobileMenuOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
