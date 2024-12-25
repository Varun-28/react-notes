import { useState } from "react";

export const StateHook = () => {
  const [count, setCount] = useState<number>(0);
  console.log("render");
  // const [count, setCount] = useState(() => {
  //   return 0;
  // }); // to be used for better performance when initial value is complex to calculate

  const [theme, setTheme] = useState<string>("light");

  // const [state, setState] = useState({ count: 0, theme: "light" }); // how to work with obj in useState

  const incrementCount = () => {
    // setState((prevState) => ({
    //   ...prevState,
    //   count: prevState.count + 1,
    // }));
    setCount((prevCount) => prevCount + 1);
    setTheme("dark");
  };

  const decrementCount = () => {
    // setState((prevState) => ({
    //   ...prevState,
    //   count: prevState.count - 1,
    // }));
    setCount((prevCount) => prevCount - 1);
    setTheme("light");
  };

  return (
    <main>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      {/* <span>{state.count}</span> */}
      <button onClick={incrementCount}>+</button>
      <p>Theme: {theme}</p>
    </main>
  );
};
