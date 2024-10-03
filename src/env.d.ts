/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly DATOCMS_URL: string
  readonly DATOCMS_API_KEY: string;
}

declare module '*.query.graphql' {
  import { DocumentNode } from 'graphql';
  const value: DocumentNode;
  export = value;
}
