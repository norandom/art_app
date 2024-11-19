import React from 'react';
import { render, screen, cleanup } from '../../test-utils';
import Education from '../Education';

// Mock the useLanguage hook and LanguageProvider
jest.mock('../../context/LanguageContext', () => ({
  useLanguage: () => ({
    language: 'en',
    setLanguage: jest.fn(),
    t: (key: string) => {
      const translations = {
        'education.title': 'Education',
        'education.items.0.school': 'Test University',
        'education.items.0.degree': 'Bachelor of Science',
        'education.items.0.field': 'Computer Science',
        'education.items.0.year': '2020-2024'
      };
      return translations[key] || key;
    }
  }),
  LanguageProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>
}));

describe('Education Component', () => {
  // Cleanup after each test
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<LanguageProvider><Education /></LanguageProvider>);
  });

  it('displays education section title', () => {
    render(<LanguageProvider><Education /></LanguageProvider>);
    expect(screen.getByText('Education')).toBeInTheDocument();
  });

  it('displays education details', () => {
    render(<LanguageProvider><Education /></LanguageProvider>);
    expect(screen.getByText('Test University')).toBeInTheDocument();
    expect(screen.getByText('Bachelor of Science')).toBeInTheDocument();
    expect(screen.getByText('Computer Science')).toBeInTheDocument();
    expect(screen.getByText('2020-2024')).toBeInTheDocument();
  });

  it('applies correct styling', () => {
    render(<LanguageProvider><Education /></LanguageProvider>);
    const title = screen.getByText('Education');
    expect(title.tagName.toLowerCase()).toBe('h2');
  });
});
