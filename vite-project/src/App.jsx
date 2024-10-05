import { useState } from "react";
import "./App.css";
import { Login } from "./Pages/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Login></Login>
    </div>
  );
}

export default App;
