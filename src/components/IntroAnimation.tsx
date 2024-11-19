import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AnimationContainer = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const World = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
`;

const Cursor = styled(motion.div)<{ $isVisible: boolean }>`
  width: 20px;
  height: 40px;
  background: ${props => props.$isVisible ? 'var(--accent-color)' : 'transparent'};
  transition: background-color 0.15s ease;
`;

const Glasses = styled(motion.div)`
  width: 60px;
  height: 24px;
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border: 3px solid var(--accent-color);
    border-radius: 50%;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

  &::before, &::after {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Bridge = styled(motion.div)`
  width: 12px;
  height: 3px;
  background-color: var(--accent-color);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const TempleArm = styled(motion.div)<{ side: 'left' | 'right' }>`
  width: 35px;
  height: 3px;
  background-color: var(--accent-color);
  position: absolute;
  top: 50%;
  transform-origin: ${props => props.side === 'left' ? '100% 50%' : '0% 50%'};
  ${props => props.side === 'left' 
    ? 'left: -35px;' 
    : 'right: -35px;'}
  transform: ${props => props.side === 'left'
    ? 'rotate(-45deg) translateY(-50%)' 
    : 'rotate(45deg) translateY(-50%)'};
`;

const IntroAnimation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showGlasses, setShowGlasses] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const worldVariants = {
    initial: { x: -200 },
    animate: { x: 0 },
    eaten: { scale: 0, transition: { duration: 0.3 } }
  };

  const cursorVariants = {
    initial: { x: 200 },
    animate: { x: 0 },
    glasses: { 
      scale: 1.2,
      transition: { duration: 0.5 }
    }
  };

  const glassesVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 } 
    }
  };

  const templeArmVariants = {
    initial: { scaleX: 0 },
    animate: { 
      scaleX: 1,
      transition: { 
        delay: 0.3,
        duration: 0.3,
        ease: "easeOut"
      } 
    }
  };

  return (
    <AnimationContainer>
      {!animationComplete && (
        <World
          initial="initial"
          animate="animate"
          variants={worldVariants}
          transition={{ duration: 1, ease: "easeOut" }}
          onAnimationComplete={() => {
            setTimeout(() => {
              setShowGlasses(true);
              setAnimationComplete(true);
            }, 2000);
          }}
        >
          ?
        </World>
      )}
      
      {!showGlasses && (
        <Cursor
          $isVisible={isVisible}
          initial="initial"
          animate="animate"
          variants={cursorVariants}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        />
      )}

      {showGlasses && (
        <motion.div
          initial="initial"
          animate="animate"
          variants={glassesVariants}
        >
          <Glasses>
            <Bridge />
            <TempleArm 
              side="left" 
              variants={templeArmVariants}
            />
            <TempleArm 
              side="right" 
              variants={templeArmVariants}
            />
          </Glasses>
        </motion.div>
      )}
    </AnimationContainer>
  );
};

export default IntroAnimation;
