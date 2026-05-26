import React from 'react';

export interface LumaProgressBarProps {
  children?: React.ReactNode;
}

export const LumaProgressBar: React.FC<LumaProgressBarProps> = ({ children }) => {
  return <div>{children}</div>;
};
