import React from 'react';

export interface LumaIconButtonProps {
  children?: React.ReactNode;
}

export const LumaIconButton: React.FC<LumaIconButtonProps> = ({ children }) => {
  return <div>{children}</div>;
};
