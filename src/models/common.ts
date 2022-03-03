import Vue, { ComponentOptions } from 'vue';

export interface ComponentOptionsWithScopeId extends ComponentOptions<Vue> {
  _scopeId?: string;
}

export type ComponentScopeAttrs = {
  [scopeAttr: string]: '';
} | null;
