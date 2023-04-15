import { IComment } from "@/lib/db/schemas/library-schema";

export interface SearchFilterOptions {
  comments?: {
    isDeleted?: boolean;
    isSpam?: boolean;
    isFlagged?: boolean;
  };
  /** Library's with over 100 stars. (This logic will most likely change as the engine grows.) */
  popular?: {
    amount: number;
  };
  limits?: {
    amount: number;
  };
  score?: boolean;
}

export type SearchIndexes = "libs_search" | "users_search";
export type SearchLanguages =
  | "javascript"
  | "typescript"
  | "python"
  | "java"
  | "php"
  | "ruby"
  | "c"
  | "c++"
  | "csharp"
  | "golang"
  | "swift"
  | "kotlin"
  | "scala"
  | "rust"
  | "dart"
  | "lua"
  | "r"
  | "perl"
  | "matlab"
  | "bash"
  | "powershell"
  | "sql"
  | "html"
  | "css"
  | "json"
  | "yaml"
  | "xml"
  | "markdown"
  | "text";

export type SearchPathValues =
  | "name"
  | "description"
  | "tags"
  | "language"
  | "comments"
  | "stars";

export type SearchPaths = SearchPathValues[] | { wildcard: "*" };

/**
 * The Results for a search.
 *
 * Because we can specify the select fields to return in the search, they are all optional by default.
 */
export type SearchResults = {
  name?: string;
  description?: string;
  language?: string;
  tags?: string[];
  icon?: string;
  stars?: number;
  comments?: IComment[];
} & {
  score?: number;
};

/**
 * Some default tags that can be used on a search
 * @example
 * ```ts
 * let tag: SearchTags = "NextJs"; // This will be "next.js"
 * ```
 *
 * This can be helpful for querying tags in the database, but it does not restrict the user from using any tag.
 */
export const DefaultSearchTags = {
  NextJs: "next.js",
  ReactJs: "react.js",
  VueJs: "vue.js",
  AngularJs: "angular.js",
  Angular: "angular",
  Vue: "vue",
  React: "react",
};

export type SearchTags = keyof typeof DefaultSearchTags;
