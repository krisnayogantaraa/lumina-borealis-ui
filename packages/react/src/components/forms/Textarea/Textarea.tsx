import React from 'react';

export interface LumaTextareaProps {
  children?: React.ReactNode;
}

export const LumaTextarea: React.FC<LumaTextareaProps> = ({ children }) => {
  return <div>{children}</div>;
};
