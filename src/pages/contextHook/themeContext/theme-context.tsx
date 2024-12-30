import { createContext, useContext, useState, ReactNode, CSSProperties } from "react";

interface ThemeContextType {
  theme: CSSProperties;
  darkLight: () => void;
}

const styleLight = {
  backgroundColor: "#fff",
  color: "#000"
};
const styleDark = {
  backgroundColor: "#000",
  color: "#fff"
};

const defaultContextValue: ThemeContextType = {
  theme: styleLight,
  darkLight: () => console.warn("darkLight function not initialized"),
};
const ThemeContext = createContext(defaultContextValue);

// provider function
const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(styleLight);

  const darkLight = () => {
    theme === styleLight ? setTheme(styleDark) : setTheme(styleLight);
  };
  return (
    <ThemeContext.Provider value={{ theme, darkLight }}>
      {children}
    </ThemeContext.Provider>
  );
};

// consumer function
const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
