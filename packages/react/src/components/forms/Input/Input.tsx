import React from 'react';

export interface LumaInputProps {
  children?: React.ReactNode;
}

export const LumaInput: React.FC<LumaInputProps> = ({ children }) => {
  return <div>{children}</div>;
};
