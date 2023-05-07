import { RawLocation } from 'vue-router';

export interface Breadcrumb {
  text: string;
  to?: RawLocation;
  href?: string;
  disabled?: boolean;
}
