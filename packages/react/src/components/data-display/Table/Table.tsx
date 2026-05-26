import React from 'react';

export interface LumaTableProps {
  children?: React.ReactNode;
}

export const LumaTable: React.FC<LumaTableProps> = ({ children }) => {
  return <div>{children}</div>;
};
