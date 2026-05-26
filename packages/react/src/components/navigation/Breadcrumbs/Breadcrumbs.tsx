import React from 'react';

export interface LumaBreadcrumbsProps {
  children?: React.ReactNode;
}

export const LumaBreadcrumbs: React.FC<LumaBreadcrumbsProps> = ({ children }) => {
  return <div>{children}</div>;
};
