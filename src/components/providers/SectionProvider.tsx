'use client';

import { ReactNode, createContext, useContext } from 'react';

type SectionContextType = {
  getSection: (sectionId: string) => ReactNode;
};

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: ReactNode }) {
  const getSection = (sectionId: string) => {
    return null;
  };

  return (
    <SectionContext.Provider value={{ getSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSections() {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSections must be used within a SectionProvider');
  }
  return context;
}
