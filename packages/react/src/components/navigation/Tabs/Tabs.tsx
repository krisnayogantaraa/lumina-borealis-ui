import React from 'react';

export interface LumaTabsProps {
  children?: React.ReactNode;
}

export const LumaTabs: React.FC<LumaTabsProps> = ({ children }) => {
  return <div>{children}</div>;
};
