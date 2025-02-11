import './App.css';
import { StateHook } from './pages/stateHook/StateHook';
import { useTheme } from "./pages/contextHook/themeContext/theme-context";
import Stopwatch from './pages/stopwatch/Stopwatch';
import CountdownTimer from './pages/countDownTimer/CountDownTimer';
import Pagination from './pages/pagination/Pagination';

function App() {
  const { theme, darkLight } = useTheme();
  return (
    <div className="App" style={theme}>
      <button onClick={darkLight}>Dark-Light</button>
      <StateHook />
      <Stopwatch />
      <CountdownTimer />
      <Pagination />
    </div>
  );
}

export default App;
