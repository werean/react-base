import Login from "./pages/Login/Index";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
//import Header from "./components/Header";
//import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Login />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
    </BrowserRouter>
  );
}

export default App;
