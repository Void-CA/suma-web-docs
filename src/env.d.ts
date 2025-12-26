/// <reference types="astro/client" />

declare global {
  namespace Astro {
    interface Props {
      title?: string;
      doc?: import('astro:content').CollectionEntry<'docs'>;
    }
  }
}

// Astro component type declarations
declare module '*.astro' {
  interface AstroComponent {
    default: any;
  }
  const component: AstroComponent;
  export default component;
}

export {};
