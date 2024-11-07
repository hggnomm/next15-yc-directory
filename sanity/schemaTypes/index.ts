import { type SchemaTypeDefinition } from "sanity";
import { author } from "@/sanity/schemaTypes/author";
import { startup } from "@/sanity/schemaTypes/startup";

// import {blockContentType} from './blockContentType'
// import {categoryType} from './categoryType'
// import {postType} from './postType'
// import {authorType} from './authorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  // types: [blockContentType, categoryType, postType, authorType],
  // code rendering automatic
  types: [author, startup],
};
