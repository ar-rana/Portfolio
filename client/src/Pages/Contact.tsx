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
            <h2 style={{ color: "white", marginBlock: 7}}>Connect with me</h2>
            <input type="text" placeholder="Subject" required />
            <input type="text" placeholder="Your email Id" required />
            <textarea rows={8} placeholder="Content" required />
            <EmergeButton text="Submit" onClick={() => setLoading(prev => !prev)}/>
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
