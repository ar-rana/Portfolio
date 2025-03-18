import React, { useState } from "react";
import EmergeButton from "../components/EmergeButton/EmergeButton";
import Navigation from "../components/Navigation/Navigation";

const Contact: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="page">
      <div className="section_container">
        <div className="contact_form">
          <form>
            <h2 style={{ color: "white", marginBlock: 7}}>Connect with me</h2>
            <input type="text" placeholder="Subject" required />
            <input type="text" placeholder="Your email Id" required />
            <textarea rows={8} placeholder="Content" required />
            <EmergeButton text="Submit" onClick={() => setLoading(prev => !prev)}/>
            {loading ? (
              <span
                className="loading fa fa-circle-o-notch fa-spin"
              ></span>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Contact;
