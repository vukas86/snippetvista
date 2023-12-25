import { DarkModeProvider } from "./store/DarkModeContext";

import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import SideBar from "./components/Sidebar/SideBar";

function App() {
  return (
    <DarkModeProvider>
      <div className="App" data-theme="dark">
        <Navbar />
        <SideBar />
      </div>
    </DarkModeProvider>
  );
}

export default App;
