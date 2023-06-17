import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar flex-1 gap-3">
      {/** Link sirve para movernos entre enlaces dentro nuestra app */}
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/newsletter">
        Newsletter
      </Link>
      <Link to="/newdonation">
        New Donation
      </Link>
      <Link to="/signUp">
        <span className="btn btn-active btn-secondary">Registrate</span>
      </Link>
    </nav>
  );
};
