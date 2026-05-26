import React from 'react';

export interface LumaDropdownMenuProps {
  children?: React.ReactNode;
}

export const LumaDropdownMenu: React.FC<LumaDropdownMenuProps> = ({ children }) => {
  return <div>{children}</div>;
};
