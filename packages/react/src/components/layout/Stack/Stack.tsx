import React from 'react';

export interface LumaStackProps {
  children?: React.ReactNode;
}

export const LumaStack: React.FC<LumaStackProps> = ({ children }) => {
  return <div>{children}</div>;
};
