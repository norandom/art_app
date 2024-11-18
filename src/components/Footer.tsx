import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--header-bg);
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.05);
  border-top: 1px solid rgba(26, 54, 93, 0.1);
  padding: 1rem 0;
  z-index: 100;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled(motion.p)`
  color: var(--secondary-color);
  font-size: 0.9rem;
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  font-family: 'Courier New', Courier, monospace;
  color: var(--secondary-color);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`;

const Footer: React.FC = () => {
  const socialLinks = [
    { title: 'GitHub', href: '#' },
    { title: 'LinkedIn', href: '#' },
    { title: 'Twitter', href: '#' },
  ];

  return (
    <FooterWrapper>
      <FooterContent>
        <Copyright
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Est. {new Date().getFullYear()} • The Portfolio
        </Copyright>
        <SocialLinks>
          {socialLinks.map((link, index) => (
            <SocialLink
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {link.title}
            </SocialLink>
          ))}
        </SocialLinks>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
