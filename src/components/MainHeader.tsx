import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--header-bg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(26, 54, 93, 0.1);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--accent-color);
  font-style: italic;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(motion.a)`
  font-family: 'Courier New', Courier, monospace;
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
`;

const MainHeader: React.FC = () => {
  const navItems = [
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Experience', href: '#experience' },
  ];

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Portfolio
        </Logo>
        <Nav>
          {navItems.map((item, index) => (
            <NavLink
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.title}
            </NavLink>
          ))}
        </Nav>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default MainHeader;
