import React from "react";
import loading from "../../assets/loading.svg";

const Loading: React.FC = () => {
  return (
    <>
      <img className="loading" src={loading} alt="Loading..." />
    </>
  );
};

export default Loading;
