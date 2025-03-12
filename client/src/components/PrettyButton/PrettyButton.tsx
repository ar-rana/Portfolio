import React from 'react';
import style from "./prettyButton.module.css";

interface Props {
  text: string;
  onClick: () => void;
}
const PrettyButton:React.FC<Props> = ({ text, onClick }) => {
  return (
    <>
    <button className={style.btn} onClick={onClick}>{text}</button>
    </>
  )
}

export default PrettyButton;