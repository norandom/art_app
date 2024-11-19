import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useAccessibility } from '../context/AccessibilityContext';
import { useLanguage } from '../context/LanguageContext';

const AccessibilityButton = styled(motion.button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--accent-color);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:focus {
    outline: 3px solid var(--text-color);
    outline-offset: 2px;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: white;
  }

  @media (max-width: 768px) {
    bottom: 80px;
    width: 40px;
    height: 40px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const MenuContainer = styled(motion.div)`
  position: fixed;
  bottom: 80px;
  right: 20px;
  background: var(--header-bg);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 250px;
  border: var(--monospace-box-border);

  @media (max-width: 768px) {
    bottom: 140px;
    right: 10px;
    left: 10px;
    min-width: unset;
    width: auto;
  }
`;

const MenuItem = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
`;

const Label = styled.span`
  font-family: var(--monospace-font);
  font-size: 0.9rem;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 0.5rem;
  }
`;

const FontSizeControls = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const MenuButton = styled.button<{ $active?: boolean }>`
  background: ${props => props.$active ? 'var(--accent-color)' : 'transparent'};
  color: ${props => props.$active ? 'white' : 'var(--text-color)'};
  border: 1px solid var(--accent-color);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-family: var(--monospace-font);
  transition: all 0.2s ease;
  min-width: 60px;

  &:hover {
    background: var(--accent-color);
    color: white;
  }

  &:focus {
    outline: 2px solid var(--text-color);
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1rem;
    width: 100%;
  }
`;

const AccessibilityMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const {
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    highContrast,
    toggleHighContrast,
    reduceMotion,
    toggleReduceMotion,
    announceMessage,
  } = useAccessibility();

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    announceMessage(isOpen ? t('accessibility.menu') + ' ' + t('accessibility.off') : t('accessibility.menu') + ' ' + t('accessibility.on'));
  };

  const handleHighContrast = () => {
    toggleHighContrast();
    announceMessage(highContrast ? t('accessibility.highContrast') + ' ' + t('accessibility.off') : t('accessibility.highContrast') + ' ' + t('accessibility.on'));
  };

  const handleReduceMotion = () => {
    toggleReduceMotion();
    announceMessage(reduceMotion ? t('accessibility.reduceMotion') + ' ' + t('accessibility.off') : t('accessibility.reduceMotion') + ' ' + t('accessibility.on'));
  };

  return (
    <>
      <AccessibilityButton
        onClick={handleToggleMenu}
        aria-label={t('accessibility.menu')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-11h2v7h-2zm0-4h2v2h-2z"/>
        </svg>
      </AccessibilityButton>

      <AnimatePresence>
        {isOpen && (
          <MenuContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <MenuItem>
              <Label>{t('accessibility.fontSize')} ({fontSize}px)</Label>
              <FontSizeControls>
                <MenuButton
                  onClick={() => {
                    decreaseFontSize();
                    announceMessage(t('accessibility.fontSize') + ' ' + (fontSize - 2) + 'px');
                  }}
                  aria-label={t('accessibility.fontSize') + ' -'}
                >
                  A-
                </MenuButton>
                <MenuButton
                  onClick={() => {
                    resetFontSize();
                    announceMessage(t('accessibility.fontSize') + ' ' + t('accessibility.reset'));
                  }}
                  aria-label={t('accessibility.reset')}
                >
                  {t('accessibility.reset')}
                </MenuButton>
                <MenuButton
                  onClick={() => {
                    increaseFontSize();
                    announceMessage(t('accessibility.fontSize') + ' ' + (fontSize + 2) + 'px');
                  }}
                  aria-label={t('accessibility.fontSize') + ' +'}
                >
                  A+
                </MenuButton>
              </FontSizeControls>
            </MenuItem>

            <MenuItem>
              <Label>{t('accessibility.highContrast')}</Label>
              <MenuButton
                $active={highContrast}
                onClick={handleHighContrast}
                aria-pressed={highContrast}
              >
                {highContrast ? t('accessibility.on') : t('accessibility.off')}
              </MenuButton>
            </MenuItem>

            <MenuItem>
              <Label>{t('accessibility.reduceMotion')}</Label>
              <MenuButton
                $active={reduceMotion}
                onClick={handleReduceMotion}
                aria-pressed={reduceMotion}
              >
                {reduceMotion ? t('accessibility.on') : t('accessibility.off')}
              </MenuButton>
            </MenuItem>
          </MenuContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityMenu;
