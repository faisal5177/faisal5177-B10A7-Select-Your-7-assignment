import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Players from "./Components/Players/Players";
import Selected from "./Components/Selected/Selected";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import { getStoredSelectedList, addToStoredSelectedList, removeFromSelected } from './Components/utilities/localstorage';
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState(getStoredSelectedList());

  useEffect(() => {
    localStorage.setItem("selected", JSON.stringify(selectedPlayers));
  }, [selectedPlayers]);

  const handleAddToCart = (player) => {
    if (coins >= player.biddingPrice) {
      setCoins((prevCoins) => prevCoins - player.biddingPrice);
      setSelectedPlayers((prevSelected) => {
        const newSelectedPlayers = [...prevSelected, player];
        localStorage.setItem("selected", JSON.stringify(newSelectedPlayers));
        return newSelectedPlayers;
      });
      addToStoredSelectedList(player.playerId);
    } else {
      alert("Not enough coins!");
    }
  };

  const handleRemoveFromCart = (player) => {
    setSelectedPlayers((prevPlayers) =>
      prevPlayers.filter((item) => item.playerId !== player.playerId)
    );
    setCoins((prevCoins) => prevCoins + player.biddingPrice);
    removeFromSelected(player.playerId);
  };

  return (
    <div className="px-10">
      <BrowserRouter>
        <NavBar coins={coins} setCoins={setCoins} />
        <Banner coins={coins} setCoins={setCoins} selectedPlayers={selectedPlayers} />
        <Routes>
          <Route
            path="/"
            element={
              <Players
                coins={coins}
                setCoins={setCoins}
                handleAddToCart={handleAddToCart}
                selectedPlayers={selectedPlayers}
              />
            }
          />
          <Route
            path="/selected"
            element={
              <Selected
                selectedPlayers={selectedPlayers}
                handleRemoveFromCart={handleRemoveFromCart}
                coins={coins}
                setCoins={setCoins}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
