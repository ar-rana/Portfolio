import styles from "./aboutView.module.css";
const AboutView = () => {
  return (
    <div className={styles.about_view}>
      <h1 style={{ fontWeight: "bolder" }}>About me.</h1>
      <span className={styles.about_text}>
        Aryan Rana, Originally from Himachal Pradesh and raised in Delhi, I
        possess a strong drive for continuous personal growth and knowledge
        acquisition. I am a Computer Science & Systems Engineering student who enjoys
        building scalable application and exploring cloud technologies. Apart
        from tech, I am also very keen about geopolitics and world afairs.
      </span>
      <br />
      <span className={styles.about_text}>
        I was interrest in the field of Computer Science since my middle school the idea
        of being able to create anything from scratch as you like always facinated me. 
        I started my proper coding journey in 2022, with a fully functional website. Since 
        then, I have made several projects, including one with more than 10,000 lines of code in my second year. 
        And currently I am enjoying my time learning Cloud technologies.
      </span>
      <br />
      <div className={styles.info_icons}>
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
          style={{ fontSize: "19px" }}
        ></span>
        <span className={styles.about_text}>Certificates</span>
        <ul>
          <li><a href="https://learn.microsoft.com/en-us/users/aryanrana-1742/" target="_blank">Microsoft Learn</a></li>
          <li><a href="https://learn.microsoft.com/api/credentials/share/en-us/AryanRana-1742/D88B13AF59C47E26?sharingId=809AB72947F9520D" target="_blank">Microsoft Certified: Azure Fundamentals</a></li>
          <li><a href="https://www.credly.com/badges/ea6f677f-7e62-4717-bd58-1b90322c0652/public_url" target="_blank">IBM: Cloud Computing Fundamentals</a></li>
          <li><a href="https://badgr.com/public/assertions/mCm_THmYQW-suouNNkcYCg?identity__email=aryanrana.connect@gmail.com" target="_blank">Postman API Fundamentals</a></li>
          <li><a href="https://www.udemy.com/certificate/UC-905c6608-0692-4f2e-9db8-b198497aae4a/" target="_blank">Java Spring Framework & Spring Boot</a></li>
          <li><a href="https://www.udemy.com/certificate/UC-d3e9c9ba-109a-4fcf-aad3-28fc0a2b6e60/" target="_blank">NodeJS & Expresss with Socket.io</a></li>
      </ul>
    </div>
    <div className={styles.inline_text}>
        <span className="fa fa-graduation-cap" style={{ fontSize: "17px" }}></span>
        <span className={styles.about_text}>CGPA: 9.06/10 </span>
    </div>
    </div>
  </div>
  );
};

export default AboutView;
