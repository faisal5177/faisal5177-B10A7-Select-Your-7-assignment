
import React, { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = ({ handleAddToCart }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/PlayersData.json")
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(error => console.error("Error fetching players data: ", error));
  }, []);
  

  return (
    <div>
      <h2 className="font-bold text-lg">Available Players</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <Player
            key={player.playerId}
            player={player}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Players;
