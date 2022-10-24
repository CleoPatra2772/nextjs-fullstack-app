import { ISearchResult } from "./SearchResult";

const base: ISearchResult = {
  url: "https://www.google.com",
  title: "This is a link to a search result about product or service",
  text: 'The topic of this link is product or service. Description of the search result. And the descriptions are about the search result. '
};

export const mockSearchResultProps = {
  base,
};