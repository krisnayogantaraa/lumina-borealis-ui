export type DescriptionListLayout = 'horizontal' | 'vertical';
export type DescriptionListSpacing = 'sm' | 'md' | 'lg';

export interface LumaDescriptionListProps {
  /**
   * Layout orientation of the description list.
   * @default 'vertical'
   */
  layout?: DescriptionListLayout;
  /**
   * Vertical spacing between list items.
   * @default 'md'
   */
  spacing?: DescriptionListSpacing;
}

export interface LumaDescriptionListItemProps {
  /**
   * The term or title of the row.
   */
  term?: string;
  /**
   * The details or value of the row.
   */
  details?: string;
}
