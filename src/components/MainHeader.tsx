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
`;

const MainHeader: React.FC = () => {
  const navItems = [
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'CV', href: '#cv' },
  ];

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Marius Ciepluch
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
