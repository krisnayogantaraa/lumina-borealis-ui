export type TagVariant = 'solid' | 'subtle' | 'outline';
export type TagColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral';
export type TagSize = 'sm' | 'md' | 'lg';

export interface LumaTagProps {
  /**
   * Style variant of the tag.
   * @default 'subtle'
   */
  variant?: TagVariant;
  /**
   * Color theme of the tag.
   * @default 'neutral'
   */
  color?: TagColor;
  /**
   * Size of the tag.
   * @default 'md'
   */
  size?: TagSize;
  /**
   * Whether the tag is closable (displays a close/delete button).
   * @default false
   */
  closable?: boolean;
  /**
   * Whether the tag is disabled.
   * @default false
   */
  disabled?: boolean;
}
