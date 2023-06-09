import { createContext } from "react";

const searchContext = createContext({
  showSuggestion: false,
});

searchContext.displayName = "searchContext";

export default searchContext;
