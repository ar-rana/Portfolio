import React, { useEffect, useRef } from "react";
import style from "./typingText.module.css";

interface Props {
  text: string;
  speed: number;
}

const TypingText: React.FC<Props> = ({text, speed}) => {
  const idx = useRef<number>(0);
  const paused = useRef<boolean>(false);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  const typeWriter = () => {
    if (paused.current) return;
    if (idx.current < text.length) {
      spanRef.current!.innerHTML += text.charAt(idx.current);
      idx.current += 1;
    } else {
      paused.current = true;
      idx.current = 0;
      setTimeout(() => {
        spanRef.current!.innerHTML = "";
        paused.current = false;
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
