import { useState, useCallback } from "react";
import { List } from "./List";

type GetItemsFunction = () => number[];

export const CallbackHook = () => {
  const [number, setNumber] = useState<number>(0);
  const [theme, setTheme] = useState<boolean>(false);

  const getItems: GetItemsFunction = useCallback(() => {
    return [number, number + 1, number + 2];
    // suppose this as some API call which is returning something
  }, [number]);

  // useCallback re-creats the getItems function only when number changes and not when theme changes

  // const getItems = () => {
  //   return [number, number + 1, number + 2];
  // };

  // Difference b/w useMemo and useCallback is that useMemo will only re-render when the dependencies change, but useCallback will re-render when the function is called. Also useMemo returns the value but useCallback returns the function.

  const myTheme = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  return (
    <main style={myTheme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setTheme((prevTheme) => !prevTheme)}>
        Change Theme
      </button>
      <List getItems={getItems} />
    </main>
  );
};
