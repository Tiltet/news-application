import { createContext } from "react";

// НАВИГИЦИЯ В ПРИЛОЖЕНИИ
const CreatContext = createContext({
  index: 0,
  setIndex: () => {},
});

export default CreatContext;
