import React from 'react';

export interface LumaAutoCompleteProps {
  children?: React.ReactNode;
}

export const LumaAutoComplete: React.FC<LumaAutoCompleteProps> = ({ children }) => {
  return <div>{children}</div>;
};
