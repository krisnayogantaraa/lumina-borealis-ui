import React from 'react';

export interface LumaCardProps {
  children?: React.ReactNode;
}

export const LumaCard: React.FC<LumaCardProps> = ({ children }) => {
  return <div>{children}</div>;
};
