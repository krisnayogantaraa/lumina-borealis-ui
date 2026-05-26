import React from 'react';

export interface LumaBoxProps {
  children?: React.ReactNode;
}

export const LumaBox: React.FC<LumaBoxProps> = ({ children }) => {
  return <div>{children}</div>;
};
