import { Nav } from "./styled";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/merda">
        <FaUserAlt />
      </Link>
      <Link to="/teste">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}