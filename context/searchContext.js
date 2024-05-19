import { createContext } from "react";

// КОНТЕКСТ ДЛЯ ПОИСКА
const SearchContext = createContext({
  searchData: 0,
  setSearchData: () => {},
})

export default SearchContext;
