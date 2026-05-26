import React from 'react';

export interface LumaBadgeProps {
  children?: React.ReactNode;
}

export const LumaBadge: React.FC<LumaBadgeProps> = ({ children }) => {
  return <div>{children}</div>;
};
