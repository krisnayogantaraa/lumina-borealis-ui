import React from 'react';

export interface LumaTextProps {
  children?: React.ReactNode;
}

export const LumaText: React.FC<LumaTextProps> = ({ children }) => {
  return <div>{children}</div>;
};
