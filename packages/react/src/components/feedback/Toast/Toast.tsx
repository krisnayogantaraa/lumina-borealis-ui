import React from 'react';

export interface LumaToastProps {
  children?: React.ReactNode;
}

export const LumaToast: React.FC<LumaToastProps> = ({ children }) => {
  return <div>{children}</div>;
};
