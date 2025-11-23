import { render, screen } from '@testing-library/react'
import ProjectCard from '../ProjectCard'

// Mock project data
const mockProject = {
  id: '1',
  slug: 'test-project',
  title: 'Test Project',
  description: 'This is a test project description',
  longDescription: 'This is a longer description for the test project',
  technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  category: 'freelance' as const,
  featured: true,
  githubUrl: 'https://github.com/test/project',
  liveUrl: 'https://test-project.com',
  imageUrl: '/test-image.jpg',
  year: 2024,
  client: 'Test Client'
}

describe('ProjectCard Component', () => {
  it('renders project information correctly', () => {
    render(<ProjectCard project={mockProject} />)
    
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('This is a test project description')).toBeInTheDocument()
    expect(screen.getByText('2024')).toBeInTheDocument()
  })

  it('displays technologies as chips', () => {
    render(<ProjectCard project={mockProject} />)
    
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
  })

  it('shows category badge', () => {
    render(<ProjectCard project={mockProject} />)
    
    expect(screen.getByText('freelance')).toBeInTheDocument()
  })

  it('renders links when URLs are provided', () => {
    render(<ProjectCard project={mockProject} />)
    
    const githubLink = screen.getByRole('link', { name: /code/i })
    const liveLink = screen.getByRole('link', { name: /live demo/i })
    
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test/project')
    expect(liveLink).toBeInTheDocument()
    expect(liveLink).toHaveAttribute('href', 'https://test-project.com')
  })

  it('does not render links when URLs are not provided', () => {
    const projectWithoutLinks = {
      ...mockProject,
      githubUrl: undefined,
      liveUrl: undefined
    }
    
    render(<ProjectCard project={projectWithoutLinks} />)
    
    expect(screen.queryByRole('link', { name: /code/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /live demo/i })).not.toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<ProjectCard project={mockProject} />)
    
    const card = screen.getByText('Test Project').closest('div')
    expect(card).toBeInTheDocument()
    
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(2)
    expect(links[0]).toHaveAttribute('href', 'https://test-project.com')
    expect(links[1]).toHaveAttribute('href', 'https://github.com/test/project')
  })
})
