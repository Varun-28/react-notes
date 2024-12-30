import { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the context value
interface CartContextType {
  items: number;
  addToCart: () => void;
}

// Create the context with a default value
const defaultContextValue: CartContextType = {
  items: 0,
  addToCart: () => console.warn("addToCart is not defined"),
};
const CartContext = createContext(defaultContextValue);

// provider function
const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState(4);

  const addToCart = () => {
    setItems((item) => item + 1);
  };
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// consumer function
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };

/* 

{children} is prop that comes to the Provider and this children
has all the component that is wrapped inside this <CartProvider>
component wherever we use it.
This process is called -> "Component Composition"
*/
