import type { Schema, Attribute } from '@strapi/strapi';

export interface AccordionAccordion extends Schema.Component {
  collectionName: 'components_accordion_accordions';
  info: {
    displayName: 'accordion';
  };
  attributes: {
    title: Attribute.Text;
    content: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'accordion.accordion': AccordionAccordion;
    }
  }
}
