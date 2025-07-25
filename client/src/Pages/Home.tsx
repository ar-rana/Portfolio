import logo2 from "../assets/logo2.png";
// import logo3 from "../assets/logo3.png";
import Navigation from "../components/Navigation/Navigation";
import TypingText from "../components/TypingText/TypingText";

const Home = () => {
  const intro = [
    "Aryan Rana",
    "a CS Engineering Student",
    "a Fullstack Engineer",
  ];
  return (
    <div className="page">
      <div className="main_container">
        <img src={logo2} />
        <div className="text_container">
          <span style={{backgroundColor: "black"}}>Hello, I'm </span>
          <TypingText text={intro} speed={200} />
        </div>
        <Navigation home={true} />
      </div>
    </div>
  );
};

export default Home;
