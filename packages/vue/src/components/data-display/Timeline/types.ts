export type TimelineDotColor = 'neutral' | 'primary' | 'success' | 'warning' | 'danger';

export interface LumaTimelineProps {}

export interface LumaTimelineItemProps {
  /**
   * Title of the event or milestone.
   */
  title?: string;
  /**
   * Detailed explanation of the event.
   */
  description?: string;
  /**
   * Time or date of the event.
   */
  time?: string;
  /**
   * Color theme of the dot separator.
   * @default 'neutral'
   */
  dotColor?: TimelineDotColor;
}
