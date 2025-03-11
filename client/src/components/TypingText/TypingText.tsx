import React, { useEffect, useRef } from "react";
import style from "./typingText.module.css";

interface Props {
  text: string[];
  speed: number;
}

const TypingText: React.FC<Props> = ({text, speed}) => {
  const idx = useRef<number>(0);
  const paused = useRef<boolean>(false);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  const str = useRef<number>(0);
  const string = useRef<string>(text[0]);

  const typeWriter = () => {
    if (paused.current) return;
    if (idx.current < string.current.length) { //text
      spanRef.current!.innerHTML += string.current.charAt(idx.current); //text
      idx.current += 1;
    } else {
      paused.current = true;
      idx.current = 0;
      setTimeout(() => {
        spanRef.current!.innerHTML = "";
        paused.current = false;

        str.current++
        if (str.current == text.length) str.current = 0;
        string.current = text[str.current];
      }, 1300);
    }
  };

  useEffect(() => {
    const interval = setInterval(typeWriter, speed);
    
    return () => clearInterval(interval); 
  }, []);
  return (
    <>
      <span id="text" ref={spanRef} className={style.typewriter}></span>
    </>
  );
};

export default TypingText;
