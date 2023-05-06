import { ReactNode, useState } from "react";

interface Props {
  onSubmit: (summonerName: string) => void;
  children?: ReactNode;
}

function SummonerSearchBox({ onSubmit, children }: Props) {
  const [summonerName, setSummonerName] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit(summonerName);
    setSummonerName("");
  };

  return (
    <div className="d-flex container-fluid justify-content-center text-center align-items-center vh-100">
      <div className="row">
        <div className="col">
          <form className="" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2 mt-2"
              type="search"
              placeholder="Summoner Name"
              aria-label="Search"
              value={summonerName}
              onChange={(e) => setSummonerName(e.target.value)}
            >
              {children}
            </input>
            <button className="btn btn-outline-success mt-2" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SummonerSearchBox;
