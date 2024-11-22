let allPlayers = [];

fetch("/PlayersData.json")
  .then((response) => response.json())
  .then((data) => {
    allPlayers = data;
  })
  .catch((error) => {
    console.error("Error fetching player data:", error);
  });

 const getStoredSelectedList = () => {
  const storedList = JSON.parse(localStorage.getItem('selected')) || [];
  return storedList.map(playerId => {
    return allPlayers.find(player => player.playerId === playerId);
  }).filter(player => player !== undefined);
};

const saveSelectedToLS = (selected) => {
  const selectedIds = selected.map(player => player.playerId);
  localStorage.setItem('selected', JSON.stringify(selectedIds));
};

 const addToStoredSelectedList = (id) => {
  const selected = getStoredSelectedList();
  if (!selected.includes(id)) {
    selected.push(id);
    saveSelectedToLS(selected);
  }
};

 const removeFromSelected = (id) => {
  const selected = getStoredSelectedList();
  const remaining = selected.filter(idx => idx !== id);
  saveSelectedToLS(remaining);
};

const handleAddToCart = (player) => {
  if (coins >= player.biddingPrice) { 
    setCoins((prevCoins) => prevCoins - player.biddingPrice);
    setSelectedPlayers((prev) => {
      const newSelectedPlayers = [...prev, player];
      localStorage.setItem('selected', JSON.stringify(newSelectedPlayers));
      return newSelectedPlayers;
    });
  } else {
    alert("Not enough coins!");
  }
};

export { handleAddToCart, getStoredSelectedList, addToStoredSelectedList, removeFromSelected };