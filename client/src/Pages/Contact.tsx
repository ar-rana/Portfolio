import React from "react";
import styles from "./page.module.css";
import EmergeButton from "../components/EmergeButton/EmergeButton";
import ParticleEffect from "../components/ParticleEffect/ParticleEffect";
import Navigation from "../components/Navigation/Navigation";

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <div className="section_container">
        <div className={styles.contact_form}>
          <form>
            <input type="text" placeholder="Enter subject" required />
            <input type="text" placeholder="Enter email Id" required/>
            <textarea
              rows={8}
              placeholder="Content"
              required
            />
            <EmergeButton text="Submit"/>
          </form>
        </div>
      </div>
      <ParticleEffect />
      <Navigation />
    </div>
  );
};

export default Contact;
