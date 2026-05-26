import React from 'react';

export interface LumaRadioProps {
  children?: React.ReactNode;
}

export const LumaRadio: React.FC<LumaRadioProps> = ({ children }) => {
  return <div>{children}</div>;
};
