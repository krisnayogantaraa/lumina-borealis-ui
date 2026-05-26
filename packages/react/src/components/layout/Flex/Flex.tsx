import React from 'react';

export interface LumaFlexProps {
  children?: React.ReactNode;
}

export const LumaFlex: React.FC<LumaFlexProps> = ({ children }) => {
  return <div>{children}</div>;
};
