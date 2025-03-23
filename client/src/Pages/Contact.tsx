import React, { useState } from "react";
import EmergeButton from "../components/EmergeButton/EmergeButton";
import Navigation from "../components/Navigation/Navigation";

const Contact: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [subject, setSubject] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleFormSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    // if (loading) return;
    if (!subject.trim() || !email.trim() || !content.trim()) {
      alert("Please fill all fields");
      return;
    }
    if (!validate(email)) {
      alert("Please enter a valid email");
      return;
    }

    setLoading(prev => !prev);
    console.log("reached function")
  };

  const validate = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  return (
    <div className="page">
      <div className="section_container">
        <div className="contact_form">
          <form>
            <h2 style={{ color: "white", marginBlock: 7 }}>Connect with me</h2>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e: any) => setSubject(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Your email Id"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              required
            />
            <textarea
              rows={8}
              placeholder="Content"
              value={content}
              onChange={(e: any) => setContent(e.target.value)}
              required
            />
            <EmergeButton text="Submit" onClick={(e: React.MouseEvent) => handleFormSubmit(e)} />
            {loading ? (
              <span className="loading-form fa fa-circle-o-notch fa-spin"></span>
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
