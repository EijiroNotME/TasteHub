import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
