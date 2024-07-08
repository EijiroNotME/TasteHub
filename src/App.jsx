import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <div className="min-h-[calc(100vh-96px)]">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
