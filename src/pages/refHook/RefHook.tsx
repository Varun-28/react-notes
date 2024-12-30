import { useState, useEffect, useRef } from "react";

export const RefHook = () => {
  const [name, setName] = useState<string>("");
  // const [count, setCount] = useState(0);
  const renderCount = useRef<number>(0);
  const inputRef = useRef<HTMLInputElement | null>(null); // Biggest use case it to reference elements inside of html

/*
Explanation of the Fix

    React's ref type expectation:
        React's ref expects the type RefObject<HTMLInputElement>, where the current property is either HTMLInputElement or null.
        By default, current is null until the DOM element is assigned.

    Why null instead of undefined:
        React internally uses null as the default value for refs, so aligning with null avoids type mismatches.

    Ensuring compatibility:
        Changing useRef<HTMLInputElement | undefined>() to useRef<HTMLInputElement | null>(null) ensures compatibility with React's typing for ref.

Key Takeaways

    Always initialize useRef with null when working with React refs for DOM elements.
    Avoid using undefined with useRef for DOM refs, as React does not recognize it as a valid type for refs.
*/

  console.log(inputRef); // this will give entire input element as a plain querySelector will do in vanilla js.

  const inputFocus = () => {
        inputRef?.current?.focus();
  }
  
  useEffect(() => {
    //setCount((prevCount) => prevCount + 1);
    // using useState to check the render count is not a good idea as once state is updated it will re-render the component, this will make infinite loop of renders.

    renderCount.current = renderCount.current + 1;
    // so we can use useRef to avoid this as it will not re-render the component and also persists the value across the renders.
  });

  return (
    <main>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>Render Count: {renderCount.current}</div>
      <button onClick={inputFocus}>Focus</button>
    </main>
  );
}