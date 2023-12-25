import { AppProvider } from "./store/AppContext";

import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import SideBar from "./components/Sidebar/SideBar";

function App() {
  return (
    <AppProvider>
      <div className="App" data-theme="dark">
        <Navbar />
        <SideBar />
      </div>
    </AppProvider>
  );
}

export default App;
