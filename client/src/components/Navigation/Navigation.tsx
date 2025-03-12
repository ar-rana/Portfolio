import React from "react";
import { Link } from "react-router-dom";
import style from "./navigation.module.css";
import EmergeButton from "../EmergeButton/EmergeButton";

interface Props {
  home?: boolean;
}

const Navigation: React.FC<Props> = ({ home = false}) => {
  return (
    <ul className={style.nav_list}>
      {home ? '' :(
        <li>
        <Link to="/">
          <EmergeButton text="Home" />
        </Link>
      </li>
      )}
      <li>
        <Link to="/about">
          <EmergeButton text="About" />
        </Link>
      </li>
      <li>
        <Link to="/projects">
          <EmergeButton text="GitHub" />
        </Link>
      </li>
      <li>
        <Link to="/about">
          <EmergeButton text="Blog" />
        </Link>
      </li>
      <li>
        <Link to="/connect-with-me">
          <EmergeButton text="Contact" />
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
