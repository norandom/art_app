import React from 'react';
import { render, screen } from '../../test-utils';
import MatrixBackground from '../MatrixBackground';

// Mock the requestAnimationFrame
beforeEach(() => {
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => {
    cb(0);
    return 0;
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('MatrixBackground Component', () => {
  it('renders without crashing', () => {
    render(<MatrixBackground />);
  });

  it('renders a canvas element', () => {
    render(<MatrixBackground />);
    const canvas = screen.getByRole('img', { name: /matrix background/i });
    expect(canvas).toBeInTheDocument();
    expect(canvas.tagName.toLowerCase()).toBe('canvas');
  });

  it('applies correct styling to canvas', () => {
    render(<MatrixBackground />);
    const canvas = screen.getByRole('img', { name: /matrix background/i });
    const computedStyle = window.getComputedStyle(canvas);
    
    expect(canvas).toHaveStyle({
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '-1'
    });
  });

  it('initializes canvas with correct dimensions', () => {
    // Mock window dimensions
    Object.defineProperty(window, 'innerWidth', { value: 1024 });
    Object.defineProperty(window, 'innerHeight', { value: 768 });

    render(<MatrixBackground />);
    const canvas = screen.getByRole('img', { name: /matrix background/i }) as HTMLCanvasElement;
    
    expect(canvas.width).toBe(1024);
    expect(canvas.height).toBe(768);
  });

  it('starts animation on mount', () => {
    const requestAnimationFrameSpy = jest.spyOn(window, 'requestAnimationFrame');
    render(<MatrixBackground />);
    
    expect(requestAnimationFrameSpy).toHaveBeenCalled();
  });
});
