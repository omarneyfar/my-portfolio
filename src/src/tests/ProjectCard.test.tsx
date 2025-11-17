import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProjectCard } from '../components/ProjectCard';
import { Project } from '../data/projects';

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('ProjectCard Component', () => {
  const mockProject: Project = {
    slug: 'test-project',
    title: 'Test Project',
    role: 'Full-stack Developer',
    period: 'Jan 2024 – Present',
    short: 'A test project description',
    responsibilities: ['Task 1', 'Task 2'],
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    type: 'Freelance',
    featured: true,
  };

  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders project role', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Full-stack Developer')).toBeInTheDocument();
  });

  it('renders project period when provided', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Jan 2024 – Present')).toBeInTheDocument();
  });

  it('does not render period when not provided', () => {
    const projectWithoutPeriod = { ...mockProject, period: undefined };
    render(<ProjectCard project={projectWithoutPeriod} />);
    expect(screen.queryByText('Jan 2024 – Present')).not.toBeInTheDocument();
  });

  it('renders project short description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('A test project description')).toBeInTheDocument();
  });

  it('renders project type badge', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Freelance')).toBeInTheDocument();
  });

  it('renders first 4 technologies', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
  });

  it('shows "+X more" when more than 4 technologies', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('+1 more')).toBeInTheDocument();
  });

  it('does not show "+X more" when 4 or fewer technologies', () => {
    const projectWithFewTech = {
      ...mockProject,
      tech: ['React', 'TypeScript', 'Node.js'],
    };
    render(<ProjectCard project={projectWithFewTech} />);
    expect(screen.queryByText(/\+\d+ more/)).not.toBeInTheDocument();
  });

  it('links to correct project detail page', () => {
    render(<ProjectCard project={mockProject} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/projects/test-project');
  });

  it('has proper accessibility classes', () => {
    const { container } = render(<ProjectCard project={mockProject} />);
    const link = container.querySelector('a');
    expect(link).toHaveClass('group');
  });

  it('renders different project types correctly', () => {
    const types: Array<Project['type']> = ['Freelance', 'Company', 'Mobile', 'Personal'];
    
    types.forEach(type => {
      const project = { ...mockProject, type };
      const { rerender } = render(<ProjectCard project={project} />);
      expect(screen.getByText(type)).toBeInTheDocument();
      rerender(<div />); // Clear for next iteration
    });
  });
});
