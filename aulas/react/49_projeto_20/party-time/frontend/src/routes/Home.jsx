import React from "react";
import partyFetch from "../axios/config";
import { Link } from "react-router-dom";

// hooks
import { useState, useEffect } from "react";

// css
import "./Home.css";

const Home = () => {
  const [parties, setParties] = useState(null);

  // load parties
  useEffect(() => {
    const loadParties = async () => {
      const res = await partyFetch.get("/parties");

      console.log(res);

      setParties(res.data);
    };

    loadParties();
  }, []);

  if (!parties) return <p>Carregando...</p>;

  return (
    <div className="home">
      <h1>Suas Festas</h1>
      <div className="parties-container">
        {parties.length === 0 && <p>Nçao há festas cadastradas!</p>}
        {parties.map((party) => (
          <div className="party" key={party.id}>
            <img src={party.image} alt={party.title} />
            <h3>{party.title}</h3>
            <Link to={`/party/${party._id}`} className="btn-secondary">
              Detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
