import React from 'react';

export interface LumaFormProps {
  children?: React.ReactNode;
}

export const LumaForm: React.FC<LumaFormProps> = ({ children }) => {
  return <div>{children}</div>;
};
