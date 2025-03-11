import { Counter } from "./pages";
import { CounterProvider } from "./store";


function App() {
  return (
      <CounterProvider>
        <Counter/>
      </CounterProvider>
  );
}

export default App;
