import React from 'react';

export interface LumaGridProps {
  children?: React.ReactNode;
}

export const LumaGrid: React.FC<LumaGridProps> = ({ children }) => {
  return <div>{children}</div>;
};
