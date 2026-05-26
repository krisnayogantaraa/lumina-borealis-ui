import React from 'react';

export interface LumaHeadingProps {
  children?: React.ReactNode;
}

export const LumaHeading: React.FC<LumaHeadingProps> = ({ children }) => {
  return <div>{children}</div>;
};
