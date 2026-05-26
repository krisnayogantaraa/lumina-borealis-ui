import React from 'react';

export interface LumaModalProps {
  children?: React.ReactNode;
}

export const LumaModal: React.FC<LumaModalProps> = ({ children }) => {
  return <div>{children}</div>;
};
