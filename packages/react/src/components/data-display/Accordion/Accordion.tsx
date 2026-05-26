import React from 'react';

export interface LumaAccordionProps {
  children?: React.ReactNode;
}

export const LumaAccordion: React.FC<LumaAccordionProps> = ({ children }) => {
  return <div>{children}</div>;
};
