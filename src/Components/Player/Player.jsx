import { IoFlagSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Player = ({ player, handleAddToCart, disabled }) => {
  return (
    <div className="player-card mt-5 border rounded-lg py-4 gap-5 w-[290px] h-[390px] mb-5 mx-auto">
      <div>
        <img
          src={player.image}
          alt={player.name}
          className="player-image w-[250px] h-[170px] object-cover mx-auto rounded-2xl shadow-md"
        />
      </div>
      <div className="px-5">
        <h3 className="font-bold mt-3 mb-2 flex">
          <span className="mr-2 mt-1"><FaUser /></span>{player.name}
        </h3>
        <div className="flex justify-between">
          <span className="flex text-gray-400">
            <IoFlagSharp />
            <small className="ml-2 -mt-1">{player.country}</small>
          </span>
          <button className="btn btn-sm rounded-lg -mt-1">{player.role}</button>
        </div>
        <div className="divider"></div>
        <p className="font-bold -mt-3 mb-1">Rating</p>
        <div className="flex justify-between">
          <small>{player.battingType}</small>
          <small className="text-gray-500 -mt-1">{player.bowlingType}</small>
        </div>
        <div className="flex justify-between">
          <small className="font-bold mt-1">Price: ${player.biddingPrice}</small>
          <button
            className={`btn btn-xs rounded-lg text-sm mt-2 ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#E7FE29]'}`}
            onClick={() => handleAddToCart(player)}
            disabled={disabled}
          >
            {disabled ? 'Cart Full' : 'Choose Player'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
