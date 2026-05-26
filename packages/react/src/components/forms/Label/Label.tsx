import React from 'react';

export interface LumaLabelProps {
  children?: React.ReactNode;
}

export const LumaLabel: React.FC<LumaLabelProps> = ({ children }) => {
  return <div>{children}</div>;
};
