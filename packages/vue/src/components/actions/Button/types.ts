/**
 * LumaButton — TypeScript type definitions
 *
 * Dipisah ke file sendiri agar consumer bisa import type-nya langsung:
 * import type { LumaButtonProps, ButtonVariant } from '@lumina-borealis/vue';
 */

import type { Component, InjectionKey } from 'vue';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonGroupContext {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const buttonGroupInjectionKey: InjectionKey<ButtonGroupContext> = Symbol('luma-button-group');

export type ButtonType = 'button' | 'submit' | 'reset';

export type IconProp = string | Component | boolean;

export interface LumaButtonProps {
  /**
   * Visual style variant of the button.
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Size of the button.
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * Native HTML button type attribute.
   * @default 'button'
   */
  type?: ButtonType;

  /**
   * Whether the button is disabled.
   * When true, the button cannot be clicked and gets a muted appearance.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the button is in a loading state.
   * When true, the button shows a spinner, disables interaction,
   * and the content is visually hidden (but kept in DOM for layout stability).
   * @default false
   */
  loading?: boolean;

  /**
   * The icon to display inside the button. Can be a string or a Vue component.
   */
  icon?: IconProp;

  /**
   * Position of the icon relative to the text.
   * @default 'left'
   */
  iconPos?: 'left' | 'right';

  /**
   * Makes the button equal width and height (square/circle) for icon-only usage.
   * @default false
   */
  iconOnly?: boolean;
}
