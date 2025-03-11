import ParticleEffect from "./components/ParticleEffect/ParticleEffect";
import PrettyButton from "./components/PrettyButton/PrettyButton";
import TypingText from "./components/TypingText/TypingText";
import EmergeButton from "./components/EmergeButton/EmergeButton";

function App() {
  return (
    <div>
      <TypingText text="Hello World!!" speed={200}/>
      <br />
      <ParticleEffect />
      <EmergeButton text="Hellooo"/>
      <PrettyButton />
    </div>
  );
}

export default App;
