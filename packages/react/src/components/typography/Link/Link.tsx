import React from 'react';

export interface LumaLinkProps {
  children?: React.ReactNode;
}

export const LumaLink: React.FC<LumaLinkProps> = ({ children }) => {
  return <div>{children}</div>;
};
