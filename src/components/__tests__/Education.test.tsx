import React from 'react';
import { render, screen } from '../../test-utils';
import Education from '../Education';
import { useInView } from 'react-intersection-observer';

// Mock translations
jest.mock('../../translations/translations', () => ({
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

// Mock react-intersection-observer
jest.mock('react-intersection-observer', () => ({
  useInView: () => {
    const ref = jest.fn();
    return [ref, true];
  }
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: function(props) {
      return <div {...props}>{props.children}</div>;
    }
  },
  useAnimation: () => ({
    start: jest.fn(),
    set: jest.fn(),
  }),
}));

describe('Education', () => {
  it('renders education section correctly', () => {
    render(<Education />);

    // Check for section title
    expect(screen.getByText('Education')).toBeInTheDocument();

    // Check for education items
    expect(screen.getByText('Master of Science')).toBeInTheDocument();
    expect(screen.getAllByText('Test University')).toHaveLength(2);
    expect(screen.getByText('2020-2022')).toBeInTheDocument();
    expect(screen.getAllByText('Computer Science')).toHaveLength(2);

    expect(screen.getByText('Bachelor of Science')).toBeInTheDocument();
    expect(screen.getByText('2016-2020')).toBeInTheDocument();

    // Check for certifications
    expect(screen.getByText('Certifications')).toBeInTheDocument();
    expect(screen.getByText('CISSP')).toBeInTheDocument();
    expect(screen.getByText('2021')).toBeInTheDocument();
    expect(screen.getByText('TOGAF')).toBeInTheDocument();
    expect(screen.getByText('2020')).toBeInTheDocument();
    expect(screen.getByText('AWS Solutions Architect')).toBeInTheDocument();
    expect(screen.getByText('2019')).toBeInTheDocument();
    expect(screen.getByText('SABSA')).toBeInTheDocument();
    expect(screen.getByText('2018')).toBeInTheDocument();
  });
});
