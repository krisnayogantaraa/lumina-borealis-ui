export type AvatarSize = 'sm' | 'md' | 'lg';
export type AvatarShape = 'circle' | 'square';
export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy';

export interface LumaAvatarProps {
  /**
   * The image source URL.
   */
  src?: string;
  /**
   * Image alt text.
   */
  alt?: string;
  /**
   * User name to generate initials if image fails to load or is not provided.
   */
  name?: string;
  /**
   * Size of the avatar.
   * @default 'md'
   */
  size?: AvatarSize;
  /**
   * Shape of the avatar.
   * @default 'circle'
   */
  shape?: AvatarShape;
  /**
   * Online status indicator.
   */
  status?: AvatarStatus;
}
