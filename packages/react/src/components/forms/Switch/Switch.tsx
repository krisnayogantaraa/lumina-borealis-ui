import React from 'react';

export interface LumaSwitchProps {
  children?: React.ReactNode;
}

export const LumaSwitch: React.FC<LumaSwitchProps> = ({ children }) => {
  return <div>{children}</div>;
};
