import React from 'react';

export interface LumaSliderProps {
  children?: React.ReactNode;
}

export const LumaSlider: React.FC<LumaSliderProps> = ({ children }) => {
  return <div>{children}</div>;
};
