import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";

interface CounterState {
  counter: number;
}

type CounterAction = { type: string; payload: number };

const defaultState: CounterState = { counter: 0 };

const defaultDispatch: Dispatch<CounterAction> = () => {
  console.warn("Dispatch function is not ready yet.");
};

const defaultContextValue = {
  state: defaultState,
  dispatch: defaultDispatch,
};

const CounterContext = createContext(defaultContextValue);

function reducerFun(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.payload };
    case "decrement":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
}

const CounterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFun, { counter: 0 });
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => useContext(CounterContext);

export { useCounter, CounterProvider };
