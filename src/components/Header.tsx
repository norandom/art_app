import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';

const HeaderContainer = styled.header`
  margin: 4rem 0;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--accent-color);
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--secondary-color);
  max-width: 600px;
  margin: 0 auto;
`;

const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <HeaderContainer>
      <Title>
        {t('header.name')}
      </Title>
      <Subtitle>
        {t('about.role')}
      </Subtitle>
    </HeaderContainer>
  );
};

export default Header;
