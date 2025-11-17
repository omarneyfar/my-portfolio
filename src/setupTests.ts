import React from 'react'

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  disconnect: jest.fn(),
  observe: jest.fn(),
  unobserve: jest.fn(),
  root: null,
  rootMargin: '',
  thresholds: [],
  takeRecords: jest.fn(),
}))

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.createElement('div', props, children),
    button: ({ children, ...props }: React.HTMLAttributes<HTMLButtonElement>) => React.createElement('button', props, children),
    span: ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => React.createElement('span', props, children),
    h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => React.createElement('h1', props, children),
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => React.createElement('h2', props, children),
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => React.createElement('p', props, children),
    a: ({ children, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => React.createElement('a', props, children),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}))
