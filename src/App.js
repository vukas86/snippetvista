import { AppProvider } from "./store/AppContext";

import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import SideBar from "./components/Sidebar/SideBar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <AppProvider>
      <div className="App" data-theme="dark">
        <Navbar />
        <SideBar />
        <div>
          <Main />
        </div>
      </div>
      {/* <Footer /> */}
    </AppProvider>
  );
}

export default App;
