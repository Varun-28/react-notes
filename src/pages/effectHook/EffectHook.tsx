import { useState, useEffect } from "react";

export const EffectHook = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleWindowChange = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowChange);

    return () => {
      window.removeEventListener("resize", handleWindowChange);
    };
  }, []);

  /* return function in useEffect hook is used for many important 
   purposes like:
   1. Cleanup
   2. Unsubscribing
   3. Resetting State

   This is used basically for improving performance
*/
  return <div>Window Width: {windowWidth}</div>;
}