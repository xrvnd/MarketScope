import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../layout/Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const linkClass = (path) =>
    `navbar-link ${pathname === path ? "active" : ""}`;

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        MarketScope
      </Link>
      <div className="navbar-right">
        <Link to="/profile" className={linkClass("/profile")}>
          Profile
        </Link>
        <button onClick={handleLogout} className="navbar-link">
          Logout
        </button>
      </div>
    </nav>
  );
}
