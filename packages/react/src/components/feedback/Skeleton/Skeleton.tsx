import React from 'react';

export interface LumaSkeletonProps {
  children?: React.ReactNode;
}

export const LumaSkeleton: React.FC<LumaSkeletonProps> = ({ children }) => {
  return <div>{children}</div>;
};
