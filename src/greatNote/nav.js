import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Nav() {
  return (
    <div>
      <h1>Great Note</h1>
      <nav>
        <Link to="/">
          <h3 className="nav-name home">Home</h3>
        </Link>
        <ul className="nav-link">
          <Link to="/info-center">
            <li className="nav-name">个人中心</li>
          </Link>
          <Link to="/create-note">
            <li className="nav-name">创建笔记</li>
          </Link>
          <Link to="/note-list">
            <li className="nav-name">笔记列表</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
