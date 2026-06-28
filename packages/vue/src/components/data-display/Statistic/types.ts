export type StatTrend = 'up' | 'down';

export interface LumaStatisticProps {
  /**
   * The label/name of the metric.
   */
  label: string;
  /**
   * The value of the metric.
   */
  value: string | number;
  /**
   * Additional explanation text or metadata shown below the value.
   */
  helpText?: string;
  /**
   * Optional trend direction.
   */
  trend?: StatTrend;
  /**
   * Optional value showing change percentage or amount (e.g. '+12%').
   */
  trendValue?: string;
}
