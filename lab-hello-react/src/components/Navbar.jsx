import ironHackLogo from "../assets/ironhack-logo-xs.png"
import menuTop from "../assets/menu-top-xs.png"

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img src={ironHackLogo} alt="ironhack logo extra small"></img>
        <img src={menuTop} alt="menu icon"></img>
      </nav>
    </div>
  );
}
