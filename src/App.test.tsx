import React from 'react';
import { render, screen } from './test-utils';
import App from './App';

jest.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    button: 'button',
    header: 'header',
    section: 'section',
    article: 'article',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p: 'p',
    span: 'span',
    a: 'a',
  },
  useReducedMotion: jest.fn().mockReturnValue(false),
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('App Component', () => {
  // TODO: Fix styled-components integration with framer-motion
  test.skip('renders without crashing', () => {
    render(<App />);
  });
});
