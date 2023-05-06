import { useState } from "react";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import SummonerSearchBox from "./components/SummonerSearchBox";
import ServerSelect from "./components/ServerSelect";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <Navbar />
      <SummonerSearchBox onSubmit={() => console.log("Submitted")} />
      <ServerSelect />
    </>
  );
}

export default App;
