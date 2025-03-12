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
          building scalable application and exploring cloud technologies.
          Apart from tech, my interests involve outdoor activities like running
          and football. I am also very keen about geopolitics and world afairs. 
        </span>
        <br />
        <div className={styles.inline_text}>
          <span
            className="fa fa-map-marker"
            style={{ fontSize: "19px" }}
          ></span>
          <span className={styles.about_text}>India</span>
        </div>
      </div>
  );
};

export default AboutView;
