import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar bg-neutral drop-shadow-lg">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost">
            <FaGithub className="text-4xl mr-3" />
            <h1 className="normal-case text-lg">Github Finder</h1>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
