import type { InjectionKey, Ref } from 'vue';

export type AccordionValue = string | number;

export interface AccordionContext {
  openValues: Ref<AccordionValue[]>;
  toggleItem: (value: AccordionValue) => void;
}

export const accordionInjectionKey: InjectionKey<AccordionContext> = Symbol('luma-accordion');

export interface AccordionItemContext {
  value: AccordionValue;
  isOpen: Ref<boolean>;
}

export const accordionItemInjectionKey: InjectionKey<AccordionItemContext> = Symbol('luma-accordion-item');

export interface LumaAccordionProps {
  /**
   * Whether multiple accordion items can be open at the same time.
   * @default false
   */
  allowMultiple?: boolean;
  /**
   * The active accordion item value(s). Supports v-model.
   */
  modelValue?: AccordionValue | AccordionValue[];
}
