import React from 'react';

export interface LumaFormGroupProps {
  children?: React.ReactNode;
}

export const LumaFormGroup: React.FC<LumaFormGroupProps> = ({ children }) => {
  return <div>{children}</div>;
};
