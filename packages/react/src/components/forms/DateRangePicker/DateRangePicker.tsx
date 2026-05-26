import React from 'react';

export interface LumaDateRangePickerProps {
  children?: React.ReactNode;
}

export const LumaDateRangePicker: React.FC<LumaDateRangePickerProps> = ({ children }) => {
  return <div>{children}</div>;
};
