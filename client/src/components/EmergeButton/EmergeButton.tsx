import React from 'react';
import style from "./emergeButton.module.css";

interface Props {
    text: string;
    onClick?: () => void;
}
const EmergeButton:React.FC<Props> = (props) => {
  return (
    <>
    <button className={style.btn} onClick={props.onClick}>{props.text}</button>
    </>
  )
}

export default EmergeButton
