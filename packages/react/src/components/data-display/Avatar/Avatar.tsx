import React from 'react';

export interface LumaAvatarProps {
  children?: React.ReactNode;
}

export const LumaAvatar: React.FC<LumaAvatarProps> = ({ children }) => {
  return <div>{children}</div>;
};
