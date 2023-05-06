import { useState } from "react";
import "./components/Navbar";
import Navbar from "./components/Navbar";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <Navbar />
      <p onClick={() => setName("")}>Hello, {name}</p>
    </>
  );
}

export default App;
