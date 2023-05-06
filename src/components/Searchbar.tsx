import { useState } from "react";

interface Props {
  onSubmit: (summonerName: string) => void;
}

function Searchbar({ onSubmit }: Props) {
  const [summonerName, setSummonerName] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit(summonerName);
    setSummonerName("");
  };

  return (
    <form className="d-flex" role="search" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Summoner Name"
        aria-label="Search"
        value={summonerName}
        onChange={(e) => setSummonerName(e.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

export default Searchbar;
