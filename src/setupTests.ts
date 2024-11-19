// jest-dom adds custom jest matchers for asserting on DOM nodes.
import '@testing-library/jest-dom';
const React = require('react');

// Allow JSX in tests
const jsx = React;

// Mock translations
jest.mock('./translations/translations', () => ({
  translations: {
    en: {
      education: {
        title: 'Education',
        masters: {
          degree: 'Master of Science',
          school: 'Test University',
          period: '2020-2022',
          description: 'Computer Science'
        },
        bachelors: {
          degree: 'Bachelor of Science',
          school: 'Test University',
          period: '2016-2020',
          description: 'Computer Science'
        },
        certifications: {
          title: 'Certifications',
          cissp: {
            degree: 'CISSP',
            period: '2021'
          },
          togaf: {
            degree: 'TOGAF',
            period: '2020'
          },
          aws: {
            degree: 'AWS Solutions Architect',
            period: '2019'
          },
          sabsa: {
            degree: 'SABSA',
            period: '2018'
          }
        }
      }
    }
  }
}));

// Mock IntersectionObserver
class IntersectionObserver {
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();
  root = null;
  rootMargin = '';
  thresholds = [];
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver
});

// Mock ResizeObserver
class ResizeObserver {
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();
}

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  configurable: true,
  value: ResizeObserver
});

// Mock matchMedia with proper event listener methods
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated but still used by some libraries
    removeListener: jest.fn(), // Deprecated but still used by some libraries
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock canvas
class MockCanvasRenderingContext2D {
  canvas: HTMLCanvasElement;
  fillStyle: string = '#000000';
  font: string = '10px sans-serif';
  globalAlpha: number = 1.0;
  
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  fillRect = jest.fn();
  fillText = jest.fn();
  clearRect = jest.fn();
  getImageData = jest.fn(() => ({
    data: new Uint8ClampedArray(4),
    width: 1,
    height: 1,
    colorSpace: 'srgb'
  }));
  putImageData = jest.fn();
  createImageData = jest.fn(() => ({
    data: new Uint8ClampedArray(4),
    width: 1,
    height: 1,
    colorSpace: 'srgb'
  }));
  scale = jest.fn();
  translate = jest.fn();
  save = jest.fn();
  restore = jest.fn();
}

// Mock getContext
HTMLCanvasElement.prototype.getContext = function(contextId: string) {
  if (contextId === '2d') {
    return new MockCanvasRenderingContext2D(this);
  }
  return null;
};

// Mock getBoundingClientRect
Element.prototype.getBoundingClientRect = function() {
  return {
    width: 1024,
    height: 768,
    top: 0,
    left: 0,
    bottom: 768,
    right: 1024,
    x: 0,
    y: 0,
    toJSON: () => {}
  };
};

// Mock window dimensions
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 1024
});

Object.defineProperty(window, 'innerHeight', {
  writable: true,
  configurable: true,
  value: 768
});

// Mock framer-motion
jest.mock('framer-motion', () => {
  const React = require('react');
  
  const componentCache = new Map();
  
  const createComponent = (type: string) => {
    if (componentCache.has(type)) {
      return componentCache.get(type);
    }
    
    const Component = React.forwardRef((props: any, ref: any) => {
      return React.createElement(type, {
        ...props,
        ref,
      });
    });
    
    // Required for styled-components
    Component.displayName = `motion.${type}`;
    Component.defaultProps = {};
    Component.toString = () => `.sc-motion-${type}`;
    Component.withComponent = (nextTag: any) => createComponent(nextTag);
    Component.styledComponentId = `sc-motion-${type}`;
    Component.target = type;
    
    // Required for react-is
    Object.defineProperty(Component, '$$typeof', {
      value: Symbol.for('react.forward_ref'),
      enumerable: false,
      writable: false
    });
    
    componentCache.set(type, Component);
    return Component;
  };

  const motion = new Proxy(
    {},
    {
      get: (target: any, prop: string) => {
        if (typeof prop === 'string' && !['$$typeof', 'target'].includes(prop)) {
          return createComponent(prop);
        }
        return undefined;
      },
    }
  );

  return {
    __esModule: true,
    motion,
    AnimatePresence: ({ children }: any) => children,
    useAnimation: () => ({
      start: jest.fn(),
      set: jest.fn(),
    }),
    useMotionValue: jest.fn(() => ({
      set: jest.fn(),
      get: jest.fn(),
    })),
    useTransform: jest.fn(() => ({
      set: jest.fn(),
      get: jest.fn(),
    })),
  };
});

// Mock requestAnimationFrame and cancelAnimationFrame
const mockRequestAnimationFrame = jest.fn((callback: FrameRequestCallback): number => {
  return window.setTimeout(() => callback(performance.now()), 0);
});

const mockCancelAnimationFrame = jest.fn((handle: number) => {
  window.clearTimeout(handle);
});

// Replace requestAnimationFrame and cancelAnimationFrame globally
Object.defineProperty(window, 'requestAnimationFrame', {
  writable: true,
  value: mockRequestAnimationFrame,
});

Object.defineProperty(window, 'cancelAnimationFrame', {
  writable: true,
  value: mockCancelAnimationFrame,
});

// Also set on global for Node.js environment
global.requestAnimationFrame = mockRequestAnimationFrame;
global.cancelAnimationFrame = mockCancelAnimationFrame;

beforeEach(() => {
  // Clear mock data before each test
  mockRequestAnimationFrame.mockClear();
  mockCancelAnimationFrame.mockClear();
  
  // Re-assign mocks in case they were overwritten
  Object.defineProperty(window, 'requestAnimationFrame', {
    writable: true,
    value: mockRequestAnimationFrame,
  });
  
  Object.defineProperty(window, 'cancelAnimationFrame', {
    writable: true,
    value: mockCancelAnimationFrame,
  });
  
  global.requestAnimationFrame = mockRequestAnimationFrame;
  global.cancelAnimationFrame = mockCancelAnimationFrame;
});

// Setup global mocks
beforeAll(() => {
  Object.defineProperty(window, 'navigator', {
    value: { language: 'en-US' },
    writable: true,
  });
});

// Cleanup after each test
afterEach(() => {
  jest.clearAllMocks();
});

// Global cleanup
afterAll(() => {
  jest.resetModules();
});
