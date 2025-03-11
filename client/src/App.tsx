import React from "react";
import ParticleEffect from "./components/ParticleEffect/ParticleEffect";
import PrettyButton from "./components/PrettyButton/PrettyButton";
import TypingText from "./components/TypingText/TypingText";

function App() {
  return (
    <div>
      <TypingText text="Hello World!!" speed={200}/>
      <br />
      <ParticleEffect />
      <PrettyButton />
    </div>
  );
}

export default App;
