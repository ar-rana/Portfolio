import styles from "./page.module.css";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import Navigation from "../components/Navigation/Navigation";
import ParticleEffect from "../components/ParticleEffect/ParticleEffect";
import TypingText from "../components/TypingText/TypingText";

const Home = () => {
  const intro = [
    "Aryan Rana",
    "a CS Engineering Student",
    "a Cloud & Fullstack Engineering Enthusiast",
  ];
  return (
    <div className="home">
      <div className={styles.main_container}>
        <img src={logo2} />
        <div className={styles.text_container}>
          <span>Hello, I'm </span>
          <TypingText text={intro} speed={200} />
        </div>
        <Navigation home={true} />
      </div>
      {/* <ParticleEffect /> */}
    </div>
  );
};

export default Home;
