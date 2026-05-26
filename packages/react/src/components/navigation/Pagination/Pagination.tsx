import React from 'react';

export interface LumaPaginationProps {
  children?: React.ReactNode;
}

export const LumaPagination: React.FC<LumaPaginationProps> = ({ children }) => {
  return <div>{children}</div>;
};
