import React from 'react';

export interface LumaButtonGroupProps {
  children?: React.ReactNode;
}

export const LumaButtonGroup: React.FC<LumaButtonGroupProps> = ({ children }) => {
  return <div>{children}</div>;
};
