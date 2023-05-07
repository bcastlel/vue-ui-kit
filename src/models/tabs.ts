import Vue, { VueConstructor } from 'vue';

export interface Tab {
  id: string | number;
  text: string;
  icon?: VueConstructor<Vue>;
  disabled?: boolean;
}
