import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../components/Button';

describe('Button Component', () => {
  it('renders with children text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies primary variant styles by default', () => {
    render(<Button>Primary</Button>);
    const button = screen.getByText('Primary');
    expect(button).toHaveClass('bg-[#00c2a8]');
  });

  it('applies secondary variant styles when specified', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByText('Secondary');
    expect(button).toHaveClass('bg-[#ffb86b]');
  });

  it('applies outline variant styles when specified', () => {
    render(<Button variant="outline">Outline</Button>);
    const button = screen.getByText('Outline');
    expect(button).toHaveClass('border-2');
    expect(button).toHaveClass('border-[#00c2a8]');
  });

  it('applies correct size classes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByText('Small')).toHaveClass('px-4');
    expect(screen.getByText('Small')).toHaveClass('py-2');

    rerender(<Button size="md">Medium</Button>);
    expect(screen.getByText('Medium')).toHaveClass('px-6');
    expect(screen.getByText('Medium')).toHaveClass('py-3');

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByText('Large')).toHaveClass('px-8');
    expect(screen.getByText('Large')).toHaveClass('py-4');
  });

  it('handles onClick events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    
    const button = screen.getByText('Click');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
    
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('accepts custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByText('Custom');
    expect(button).toHaveClass('custom-class');
  });

  it('forwards additional HTML button attributes', () => {
    render(<Button type="submit" aria-label="Submit form">Submit</Button>);
    const button = screen.getByText('Submit');
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveAttribute('aria-label', 'Submit form');
  });
});
