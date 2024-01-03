import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logos">
          <img className="logo" src="logo.png" />
          <p className="logoname">Dekho</p>
        </div>

        <div className="menubar">
          <Link className="link" href="/">Home</Link>
          <Link className="link" href="/added">Added</Link>
          <Link className="link" href="/">◀ LogOut</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
