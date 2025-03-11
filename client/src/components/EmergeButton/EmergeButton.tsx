import React from 'react';
import style from "./emergeButton.module.css";

interface Props {
    text: string;
}
const EmergeButton:React.FC<Props> = (props) => {
  return (
    <>
    <button className={style.btn}>{props.text}</button>
    </>
  )
}

export default EmergeButton
