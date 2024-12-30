import React, { useState, useEffect, useMemo } from "react";

export const MemoHook = () => {
  const [number, setNumber] = useState<number>(0);
  const [theme, setTheme] = useState<boolean>(false);

  const myTheme = useMemo(() => {
    return {
      backgroundColor: theme ? "black" : "white",
      color: theme ? "white" : "black",
    };
  }, [theme]);

  // const myTheme = {
  //   backgroundColor: theme ? "black" : "white",
  //   color: theme ? "white" : "black",
  // };

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  // By using useMemo, the slowFunction is only called when the number changes and not when theme changes

  // const doubleNumber = slowFunction(number);

  useEffect(() => {
    console.log("theme changed");
    // without using useMemo this will log at every render as everytime the variable myTheme will be reference to a new object at new memory location
  }, [myTheme]);

  return (
    <main>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setTheme((prevTheme) => !prevTheme)}>
        Change Theme
      </button>
      <div style={myTheme}>{doubleNumber}</div>
    </main>
  );
}

const slowFunction = (number: number) => {
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
};