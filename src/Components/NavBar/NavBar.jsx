import Coin from "../../assets/images/coin.png";
import NavbarLogo from "../../assets/images/logo.png";

const NavBar = ({ coins }) => {
  return (
    <nav className="flex justify-between py-3 mt-5 rounded-lg glass sticky top-0 z-10">
      <div>
        <a>
          <img className="w-[60px]" src={NavbarLogo} alt="Logo" />
        </a>
      </div>
      <div className="my-auto">
        <ul className="flex gap-5">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
          <li>
            <a className="btn btn-xs flex items-center space-x-2">
              <span>{coins.toLocaleString()} Coin</span>
              <span>
                <img className="w-[20px]" src={Coin} alt="Coin Icon" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
