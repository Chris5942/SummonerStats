import { useState } from "react";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import SummonerSearchBox from "./components/SummonerSearchBox";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <Navbar />
      <SummonerSearchBox onSubmit={() => console.log("Submitted")} />
    </>
  );
}

export default App;
