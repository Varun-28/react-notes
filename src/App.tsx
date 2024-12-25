import './App.css';
import { StateHook } from './components/Components';
import { useTheme } from "./context/themeContext/theme-context";

function App() {
  const { theme, darkLight } = useTheme();
  return (
    <div className="App" style={theme}>
      <button onClick={darkLight}>Dark-Light</button>
      <StateHook />
    </div>
  );
}

export default App;
