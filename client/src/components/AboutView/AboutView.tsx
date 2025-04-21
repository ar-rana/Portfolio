import styles from "./aboutView.module.css";
const AboutView = () => {
  return (
    <div className={styles.about_view}>
      <h1 style={{ fontWeight: "bolder" }}>About me.</h1>
      <span className={styles.about_text}>
        Aryan Rana, Originally from Himachal Pradesh and raised in Delhi, I
        possess a strong drive for continuous personal growth and knowledge
        acquisition.
      </span>
      <br />
      <span className={styles.about_text}>
        I am a Computer Science & Systems Engineering student who enjoys
        building scalable application and exploring cloud technologies. Apart
        from tech, my interests involve outdoor activities like running and
        football. I am also very keen about geopolitics and world afairs.
      </span>
      <br />
      <div className={styles.inline_text}>
        <span className="fa fa-map-marker" style={{ fontSize: "21px" }}></span>
        <span className={styles.about_text}>India</span>
      </div>
        <div className={`${styles.inline_text} ${styles.drop_down}`}>
          <span
            className="fa fa-free-code-camp"
            style={{ fontSize: "17px" }}
          ></span>
          <span className={styles.about_text}>DSA</span>
          <ul>
            <li><a href="https://leetcode.com/u/ar_Rana/" target="_blank">LeetCode</a></li>
            <li><a href="https://www.geeksforgeeks.org/user/ar_rana/" target="_blank">Geeks for Geeks</a></li>
          </ul>
        </div>
        <div className={`${styles.inline_text} ${styles.drop_down}`}>
          <span
            className="fa fa-certificate"
            style={{ fontSize: "17px" }}
          ></span>
          <span className={styles.about_text}>Certificates</span>
          <ul>
            <li><a href="https://learn.microsoft.com/en-us/users/aryanrana-1742/" target="_blank">Microsoft Learn</a></li>
            <li><a href="https://badgr.com/public/assertions/mCm_THmYQW-suouNNkcYCg?identity__email=aryanrana.connect@gmail.com" target="_blank">Postman API Fundamentals</a></li>
            <li><a href="https://www.udemy.com/certificate/UC-905c6608-0692-4f2e-9db8-b198497aae4a/" target="_blank">Java Spring & Spring Boot</a></li>
            <li><a href="https://www.udemy.com/certificate/UC-d3e9c9ba-109a-4fcf-aad3-28fc0a2b6e60/" target="_blank">Node, Expresss & MongoDB</a></li>
        </ul>
      </div>
    </div>
  );
};

export default AboutView;
