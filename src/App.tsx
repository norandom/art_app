import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GlobalStyles } from './styles/GlobalStyles';

import MainHeader from './components/MainHeader';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import CV from './components/CV';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';
import IntroAnimation from './components/IntroAnimation';

const MainContainer = styled.div`
  padding-top: 60px; /* Space for fixed header */
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding-bottom: 80px; /* Space for fixed footer */
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <MatrixBackground />
      <div className="content-wrapper">
        <MainHeader />
        <MainContainer>
          <ContentContainer>
            <IntroAnimation />
            <Header />
            <About />
            <Education />
            <Projects />
            <CV />
          </ContentContainer>
        </MainContainer>
        <Footer />
      </div>
    </>
  );
};

export default App;
