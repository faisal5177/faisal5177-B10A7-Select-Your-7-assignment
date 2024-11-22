import React, { useState } from "react";
import { Link } from "react-router-dom";
import BannerImg from "../../assets/images/banner-main.png";
import { TiTick } from "react-icons/ti";

const Banner = ({ coins, setCoins, selectedPlayers = [] }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const handleClaimCredit = () => {
    setCoins(coins + 600000);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  return (
    <div>
      <div className="text-center rounded-2xl py-16 bg-gradient-to-tr from-[#052d55] via-black to-[#b05981]">
        <img className="mx-auto -mt-10 mb-5" src={BannerImg} alt="banner" />
        <h2 className="text-white mb-5 text-3xl font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="font-semibold text-center mb-5 text-gray-500">
          Beyond Boundaries, Beyond Limits
        </p>
        <a className="border rounded-xl px-2 py-4 border-gray-300">
        <button
          onClick={handleClaimCredit}
          className="btn btn-sm mt-4 bg-[#E7FE29] mx-auto rounded-lg"
        >
          Claim Free Credit
        </button>
        </a>
      </div>

      {showAlert && (
        <div className="cart font-bold alert-slide-in show t py-4 text-sm rounded-md w-2/4 mx-auto fixed top-0 left-0 right-0 z-50 flex bg-base-200 items-center justify-center">
          <span className="md:p-1 mr-2 duration-1000 border rounded-full bg-green-400 text-white shadow-lg">
            <TiTick />
          </span>
          Credit Added to your Account!
        </div>
      )}

      <div className="py-10 text-end">
        <Link to="/">
          <button
            className={`btn btn-sm mr-5 ${activeButton === "available" ? "bg-[#E7FE29]" : "hover:bg-[#E7FE29] hover:text-black hover:shadow-2xl bg-white text-black border-[#E7FE29]"}`}
            onClick={() => handleButtonClick("available")}
          >
            Available
          </button>
        </Link>

        <Link to="/selected">
          <button
            className={`btn btn-sm mr-5 ${activeButton === "selected" ? "bg-[#E7FE29]" : "hover:bg-[#E7FE29] hover:text-black hover:shadow-2xl bg-white text-black border-[#E7FE29]"}`}
            onClick={() => handleButtonClick("selected")}
          >
            Selected {selectedPlayers.length}
            {selectedPlayers.length >= 6 && (
              <p className="text-red-500 mt-4">
                You can only select up to 6 players!
              </p>
            )}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
