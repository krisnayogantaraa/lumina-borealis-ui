import React from 'react';

export interface LumaMultiSelectProps {
  children?: React.ReactNode;
}

export const LumaMultiSelect: React.FC<LumaMultiSelectProps> = ({ children }) => {
  return <div>{children}</div>;
};
