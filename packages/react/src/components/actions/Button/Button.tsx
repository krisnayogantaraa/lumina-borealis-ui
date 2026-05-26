import React from 'react';

export interface LumaButtonProps {
  children?: React.ReactNode;
}

export const LumaButton: React.FC<LumaButtonProps> = ({ children }) => {
  return <div>{children}</div>;
};
