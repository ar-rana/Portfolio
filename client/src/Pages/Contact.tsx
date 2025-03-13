import React, { useState } from "react";
import styles from "./page.module.css";
import EmergeButton from "../components/EmergeButton/EmergeButton";
import ParticleEffect from "../components/ParticleEffect/ParticleEffect";
import Navigation from "../components/Navigation/Navigation";

const Contact: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [temp, setTemp] = useState(true);

  return (
    <div className="contact">
      <div className="section_container">
        <div className={styles.contact_form}>
          <form>
            <input type="text" placeholder="Enter subject" required />
            <input type="text" placeholder="Enter email Id" required />
            <textarea rows={8} placeholder="Content" required />
            <EmergeButton text="Submit" />
            {loading ? (
              <span
                className={`${styles.loading} fa fa-circle-o-notch fa-spin`}
              ></span>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>

      <button style={{ position: 'absolute', top: 0, left: 0}} onClick={() => setTemp(prev => !prev)}>click</button>
      {temp ? (
        <ParticleEffect />
      ): ''}

      <Navigation />
    </div>
  );
};

export default Contact;
