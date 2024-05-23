import "./styles/App.scss";
import AppRoutes from "./Routes";
import { useEffect } from "react";
import { TELEGRAM } from "./utils/constants";

function App() {
  useEffect(() => {
    TELEGRAM.expand();
  }, []);
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
