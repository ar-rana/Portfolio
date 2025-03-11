import React from "react";
import styles from "./homeView.module.css";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import TypingText from "../TypingText/TypingText";
import EmergeButton from "../EmergeButton/EmergeButton";
import { Link } from "react-router-dom";

const HomeView = () => {
  const intro = [
    "Aryan Rana",
    "a CS Engineering Student",
    "a Cloud & Fullstack Engineering Enthusiast",
  ];
  return (
    <div className={styles.main_container}>
      <img src={logo2} />
      <div className={styles.text_container}>
        <span>Hello, I'm </span>
        <TypingText text={intro} speed={200} />
      </div>
      <ul className={styles.nav_list}>
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
    </div>
  );
};

export default HomeView;
