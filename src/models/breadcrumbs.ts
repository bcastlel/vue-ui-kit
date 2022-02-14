import { Location } from 'vue-router';

export interface BreadcrumbsItem {
  text: string;
  to: string | Location;
}
