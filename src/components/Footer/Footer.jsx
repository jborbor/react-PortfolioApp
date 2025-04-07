import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        <span className={styles.version}>
          {" "}
          &copy; My portfolio : version 2.0.1 Copyright @ 2025.
        </span>
        <br />
        <br />
        Esta app fue desarrollada utilizando React, Tailwind, Github, Netlify y
        Toast....
      </p>
    </section>
  );
}

export default Footer;
