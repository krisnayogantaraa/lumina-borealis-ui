import React from 'react';

export interface LumaDatePickerProps {
  children?: React.ReactNode;
}

export const LumaDatePicker: React.FC<LumaDatePickerProps> = ({ children }) => {
  return <div>{children}</div>;
};
