import React, { useState, useEffect } from "react";
import Player from "../../Components/Player/Player";

const PlayerList = ({ handleAddToCart, selectedPlayers }) => {
  const [players, setPlayers] = useState([]);
  

  useEffect(() => {
    fetch("/PlayersData.json")
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(error => console.error("Error fetching players data: ", error));
  }, []);

  return (
    <div className="player-list">
      <h2 className="font-bold text-lg">Available Players</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.length > 0 ? (
          players.map(player => (
            <Player
              key={player.playerId}
              player={player}
              handleAddToCart={handleAddToCart}
              disabled={selectedPlayers.length >= 6}
            />
          ))
        ) : (
          <p>No players available</p>
        )}
      </div>
    </div>
  );
};

export default PlayerList;
