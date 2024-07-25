import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Footer from "./components/Footer/Footer";
import DownloadApp from "./components/Download/Download";
// import Home from './Home/Home';

function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      {/* <Home/> */}
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;