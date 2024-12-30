import { useCounter } from "./counterContext/counter-context";

export const ReducerHook = () => {
  const { state, dispatch } = useCounter();
  return (
    <div className="App">
      {state.counter}
      <button onClick={() => dispatch({ type: "increment", payload: 42 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        -
      </button>
    </div>
  );
};
