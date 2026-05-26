import React from 'react';

export interface LumaFieldProps {
  children?: React.ReactNode;
}

export const LumaField: React.FC<LumaFieldProps> = ({ children }) => {
  return <div>{children}</div>;
};
