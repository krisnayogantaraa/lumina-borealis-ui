import type { Component } from 'vue';

export type CardVariant = 'elevated' | 'flat' | 'outline';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface LumaCardProps {
  /**
   * HTML tag or Vue component to render as the root element.
   * @default 'div'
   */
  as?: string | Component;
  /**
   * Visual style variant of the card.
   * @default 'elevated'
   */
  variant?: CardVariant;
  /**
   * Padding spacing of the card.
   * @default 'md'
   */
  padding?: CardPadding;
}
