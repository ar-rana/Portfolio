import React from 'react';
import style from "./prettyButton.module.css";

const PrettyButton:React.FC = () => {
  return (
    <>
    <button className={style.btn}>Hello</button>
    </>
  )
}

export default PrettyButton;