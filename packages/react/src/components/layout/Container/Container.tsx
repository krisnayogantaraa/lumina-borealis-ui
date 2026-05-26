import React from 'react';

export interface LumaContainerProps {
  children?: React.ReactNode;
}

export const LumaContainer: React.FC<LumaContainerProps> = ({ children }) => {
  return <div>{children}</div>;
};
