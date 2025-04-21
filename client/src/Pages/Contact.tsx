import React, { useRef, useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import ReCAPTCHA from "react-google-recaptcha";
import PrettyButton from "../components/PrettyButton/PrettyButton";

const Contact: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const tokenRef = useRef<string>("");
  const recaptchaRef = useRef<any>(null);

  const [subject, setSubject] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleFormSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/send_email", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: email,
          subject: subject,
          content: content,
          token: tokenRef.current,
        }),
      });

      if (res.ok) {
        const response = await res.text();
        alert(response);
      } else {
        const response = await res.text();
        alert(response);
      }
    } catch (e) {
      console.log("Some error occured: ", e);
    } finally {
      setLoading(false);
      recaptchaRef.current.reset();
    }
  };

  const captchaAction = (token: string | null) => {
    if (token) tokenRef.current = token;
  };

  const validateForm = () => {
    if (loading) return false;
    if (
      !tokenRef.current ||
      !subject.trim() ||
      !email.trim() ||
      !content.trim()
    ) {
      alert("Please fill all fields");
      return false;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email");
      return false;
    }
    return true;
  };

  const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  return (
    <div className="page">
      <div className="section_container" style={{ border : "2px solid white"}}>
        <div className="contact_form">
          <form>
            <h2 style={{ color: "white", marginBlock: 7 }}>Connect with me.</h2>
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
              rows={7}
              placeholder="Content"
              value={content}
              onChange={(e: any) => setContent(e.target.value)}
              required
            />
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITEKEY}
              ref={recaptchaRef}
              onChange={(value) => captchaAction(value)}
            />
            <br />
            {loading ? (
              <span className="loading_form fa fa-circle-o-notch fa-spin"></span>
            ) : (
              <PrettyButton text="&emsp;&emsp;Send&emsp;&emsp;" onClick={() => handleFormSubmit}/>
            )}
          </form>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Contact;
