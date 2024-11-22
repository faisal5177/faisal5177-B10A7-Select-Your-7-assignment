import { RiDeleteBin6Line } from "react-icons/ri";

const Selected = ({
  selectedPlayers,
  handleRemoveFromCart,
 
}) => {
  return (
    <div>
      <h2>Selected Players: {selectedPlayers.length}</h2>
      <div className="selected-players-list mt-10">
        {selectedPlayers.map((player) => (
          <div key={player.playerId} className="cart-item">
            <div className="flex border gap-5 border-gray-300 rounded-xl p-3">
              <div className="p-3">
                <img
                  className="w-[100px] rounded-2xl"
                  src={player.image}
                  alt={player.name}
                />
              </div>
              <div className="my-auto">
                <h3 className="font-bold text-lg mb-2">{player.name}</h3>
                <small className="text-gray-500">{player.battingType}</small>
              </div>
              <div className="ml-auto my-auto">
                <small onClick={() => handleRemoveFromCart(player)} className="cursor-pointer">
                  <RiDeleteBin6Line className="text-red-500 mr-5" />
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a className="border border-gray-400 rounded-xl px-1 py-3">
        <button
          className="btn btn-sm bg-[#E7FE29] rounded-xl mt-10"
          onClick={() => (window.location.href = "/")}
        >
          Add More Players
        </button>
      </a>
    </div>
  );
};

export default Selected;
