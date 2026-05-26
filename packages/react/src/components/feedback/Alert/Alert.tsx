import React from 'react';

export interface LumaAlertProps {
  children?: React.ReactNode;
}

export const LumaAlert: React.FC<LumaAlertProps> = ({ children }) => {
  return <div>{children}</div>;
};
