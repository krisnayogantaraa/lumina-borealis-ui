export type BadgeVariant = 'solid' | 'subtle' | 'outline';
export type BadgeColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral';

export interface LumaBadgeProps {
  /**
   * Style variant of the badge.
   * @default 'subtle'
   */
  variant?: BadgeVariant;
  /**
   * Color theme of the badge.
   * @default 'neutral'
   */
  color?: BadgeColor;
}
