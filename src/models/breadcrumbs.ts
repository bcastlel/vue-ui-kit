import { RawLocation } from 'vue-router';

export interface BreadcrumbsItem {
  text: string;
  to?: RawLocation;
  href?: string;
  disabled?: boolean;
}
