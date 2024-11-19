import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
}

const ImageContainer = styled(motion.div)<{ $width?: string; $height?: string }>`
  width: ${props => props.$width || 'auto'};
  height: ${props => props.$height || 'auto'};
  position: relative;
  overflow: hidden;
`;

const StyledImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--monospace-box-background);
`;

const OptimizedImage: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <ImageContainer
      $width={width}
      $height={height}
      className={className}
    >
      {!isLoaded && <Placeholder />}
      {imageSrc && (
        <StyledImage
          src={imageSrc}
          alt={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
        />
      )}
    </ImageContainer>
  );
};

export default OptimizedImage;
