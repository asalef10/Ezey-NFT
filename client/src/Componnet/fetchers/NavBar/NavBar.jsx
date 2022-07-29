import "./NavBar.css";

import { useGlobalContext } from "../../../UseContext/UseContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { addressShortcut, account, connectMetaMask } = useGlobalContext();
  const alertMessage = () => {
    if (!account) {
      alert(`To get started, click the "Let's started" button in home page.`);
    }
  };

  return (
    <>
      <nav>
        <a
          className="logo"
          target={"_blank"}
          href={`https://mumbai.polygonscan.com/address/${account}`}
        >
          {account && addressShortcut(account)}
        </a>
        <ul className="nav-bar">
          <li className="nav-bar_item">
            <Link className="navBar-btn" to="/">
              Home
            </Link>
          </li>
          <li onClick={alertMessage} className="nav-bar_item">
            <Link className="navBar-btn" to="/Create-Collection">
              Create Collection
            </Link>
          </li>
          <li onClick={alertMessage} className="nav-bar_item">
            <Link className="navBar-btn" to="/Add-Item">
              Add To Collection
            </Link>
          </li>
          <li className="nav-bar_item">
            <Link className="navBar-btn" to="/AllNFTs">
              All NFTs Gallery
            </Link>
          </li>

          <li onClick={alertMessage} className="nav-bar_item">
            <Link className="navBar-btn" to="/My-Collection">
              My Collection
            </Link>
          </li>
          <li className="nav-bar_item">
            <Link className="navBar-btn" to="/Contact-Us">
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
