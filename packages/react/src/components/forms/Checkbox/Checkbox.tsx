import React from 'react';

export interface LumaCheckboxProps {
  children?: React.ReactNode;
}

export const LumaCheckbox: React.FC<LumaCheckboxProps> = ({ children }) => {
  return <div>{children}</div>;
};
