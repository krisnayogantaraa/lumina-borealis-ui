import React from 'react';

export interface LumaDividerProps {
  children?: React.ReactNode;
}

export const LumaDivider: React.FC<LumaDividerProps> = ({ children }) => {
  return <div>{children}</div>;
};
