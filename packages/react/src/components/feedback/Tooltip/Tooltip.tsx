import React from 'react';

export interface LumaTooltipProps {
  children?: React.ReactNode;
}

export const LumaTooltip: React.FC<LumaTooltipProps> = ({ children }) => {
  return <div>{children}</div>;
};
