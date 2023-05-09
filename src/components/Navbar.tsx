import { useState } from "react";

function getSummonerInfo(summonerName: string) {
  const apiKey = "";
  const name = summonerName.replace("", "-");
}

function Navbar() {
  const [summonerName, setSummonerName] = useState("");
  const updateSummonerName = (summonerName: string) => {
    setSummonerName(summonerName);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Summoner Stats
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link disabled" aria-current="page" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Contact Us
              </a>
            </li><li className="nav-item">
              <a className="nav-link disabled" href="#">
                Tools
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                {summonerName}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
