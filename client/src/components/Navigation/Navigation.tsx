import React from "react";
import { Link } from "react-router-dom";
import style from "./navigation.module.css";
import EmergeButton from "../EmergeButton/EmergeButton";

const Navigation: React.FC = () => {
  return (
    <ul className={style.nav_list}>
      <li>
        <Link to="/about">
          <EmergeButton text="About" />
        </Link>
      </li>
      <li>
        <Link to="/about">
          <EmergeButton text="GitHub" />
        </Link>
      </li>
      <li>
        <Link to="/about">
          <EmergeButton text="Blog" />
        </Link>
      </li>
      <li>
        <Link to="/about">
          <EmergeButton text="Contact" />
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
