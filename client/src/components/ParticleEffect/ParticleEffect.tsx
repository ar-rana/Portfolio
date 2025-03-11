import React from "react";
import styles from "./particleEffect.module.css";

const ParticleEffect: React.FC = () => {

  return (
    <div className={styles.particle_container}>
      <div className={styles.bubble}>
        <span style={{ "--i": 28 } as React.CSSProperties}></span>
        <span style={{ "--i": 12 } as React.CSSProperties}></span>
        <span style={{ "--i": 20 } as React.CSSProperties}></span>
        <span style={{ "--i": 24 } as React.CSSProperties}></span>
        <span style={{ "--i": 22 } as React.CSSProperties}></span>
        <span style={{ "--i": 13 } as React.CSSProperties}></span>
        <span style={{ "--i": 17 } as React.CSSProperties}></span>
        <span style={{ "--i": 27 } as React.CSSProperties}></span>
        <span style={{ "--i": 25 } as React.CSSProperties}></span>
        <span style={{ "--i": 16 } as React.CSSProperties}></span>
        <span style={{ "--i": 14 } as React.CSSProperties}></span>
        <span style={{ "--i": 18 } as React.CSSProperties}></span>
        <span style={{ "--i": 12 } as React.CSSProperties}></span>
        <span style={{ "--i": 20 } as React.CSSProperties}></span>
        <span style={{ "--i": 24 } as React.CSSProperties}></span>
        <span style={{ "--i": 22 } as React.CSSProperties}></span>
        <span style={{ "--i": 13 } as React.CSSProperties}></span>
        <span style={{ "--i": 15 } as React.CSSProperties}></span>
        <span style={{ "--i": 11 } as React.CSSProperties}></span>
        <span style={{ "--i": 25 } as React.CSSProperties}></span>
        <span style={{ "--i": 16 } as React.CSSProperties}></span>
        <span style={{ "--i": 14 } as React.CSSProperties}></span>
        <span style={{ "--i": 19 } as React.CSSProperties}></span>
      </div>
    </div>
  );
};

export default ParticleEffect;
