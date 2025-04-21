import React, { useEffect, useRef } from "react";
import styles from "./modal.module.css";
import { useMessage } from "../../MessageContext";

const Modal: React.FC = () => {
  const { message, setMessage } = useMessage();

  const closeRef = useRef<HTMLDivElement | null>(null);

  const closeModalHandler = () => {
    closeRef.current!.style.display = 'none';
    setMessage(null);
  };

  useEffect(() => {
    if (message !== null) {
      setMessage(message);
      closeRef.current!.style.display = 'flex';
    }
  }, [message]);
  
  return (
    <div ref={closeRef} className={`${styles.modal_wrapper}`}>
      <div className={`${styles.modal_body}`}>
        <div className={`${styles.modal_header}`}>
          <h2 className="heading">Responce</h2>
          <span
            onClick={closeModalHandler}
            className="fa fa-times"
            title="close window"
          ></span>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
