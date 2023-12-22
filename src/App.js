import { DarkModeProvider } from "./store/DarkModeContext";

import Navbar from "./components/Navbar/Navbar";
import "./index.css";

function App() {
  return (
    <DarkModeProvider>
      <div className="App" data-theme="dark">
        <Navbar />
        <h1>Hello</h1>
      </div>
    </DarkModeProvider>
  );
}

export default App;
