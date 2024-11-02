import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ showNav }) => {
  const { pathname } = useLocation();

  return (
    <nav className={showNav ? "show" : ""}>
      <div className="logo">
        <Link to="/">NewsAGR</Link>
      </div>
      <ul>
        {routes?.map(({ id, path, label }) => (
          <li key={id} className={pathname === path && "active"}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Index = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => setShowNav((prev) => !prev);

  return (
    <header>
      <div className="logo">
        <Link to="/">NewsAGR</Link>
      </div>
      <NavBar showNav={showNav} />
      <div className="hamburger" onClick={toggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

const routes = [
  { id: 1, path: "/", label: "Headlines" },
  { id: 2, path: "/all-news", label: "All News" },
  { id: 3, path: "/my-feed", label: "My Feed" },
];

export default Index;
