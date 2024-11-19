import React from 'react';
import { render, screen } from '../../test-utils';
import MatrixBackground from '../MatrixBackground';

describe('MatrixBackground Component', () => {
  beforeEach(() => {
    // Mock requestAnimationFrame
    window.requestAnimationFrame = jest.fn().mockImplementation((callback) => {
      callback(0);
      return 0;
    });
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<MatrixBackground />);
  });

  it('renders a canvas element', () => {
    render(<MatrixBackground />);
    const canvas = screen.getByTestId('matrix-bg');
    expect(canvas).toBeInTheDocument();
    expect(canvas.tagName.toLowerCase()).toBe('canvas');
  });

  it('applies correct styling to canvas', () => {
    render(<MatrixBackground />);
    const canvas = screen.getByTestId('matrix-bg');
    
    expect(canvas).toHaveStyle({
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -1,
    });
  });

  it('initializes canvas with correct dimensions', () => {
    // Mock window dimensions
    Object.defineProperty(window, 'innerWidth', { value: 1024 });
    Object.defineProperty(window, 'innerHeight', { value: 768 });

    render(<MatrixBackground />);
    const canvas = screen.getByTestId('matrix-bg') as HTMLCanvasElement;
    
    expect(canvas.width).toBe(1024);
    expect(canvas.height).toBe(768);
  });

  // TODO: Fix requestAnimationFrame mock
  test.skip('starts animation on mount', () => {
    render(<MatrixBackground />);
    expect(window.requestAnimationFrame).toHaveBeenCalled();
  });
});
