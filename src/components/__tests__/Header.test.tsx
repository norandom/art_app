import React from 'react';
import { render, screen, cleanup } from '../../test-utils';
import Header from '../Header';

// Mock translations
jest.mock('../../translations/translations', () => ({
  translations: {
    en: {
      header: {
        name: 'John Doe'
      },
      about: {
        role: 'Software Developer'
      }
    }
  }
}));

describe('Header Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the header with correct name and role', () => {
    render(<Header />);
    
    const name = screen.getByText('John Doe');
    const role = screen.getByText('Software Developer');
    
    expect(name).toBeInTheDocument();
    expect(role).toBeInTheDocument();
    expect(name.tagName.toLowerCase()).toBe('h1');
    expect(role.tagName.toLowerCase()).toBe('p');
  });
});
