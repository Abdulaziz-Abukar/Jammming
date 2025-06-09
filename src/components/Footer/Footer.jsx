import React from "react";
import styles from "./Footer.module.css";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Jammming. All rights reserved.</p>
      <div className={styles.footerLinks}>
        <a href="https://github.com/Abdulaziz-Abukar" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/abdul-abukar/" target="_blank">
          LinkedIn
        </a>
        <a
          href="https://dev-abdulaziz-abukars-projects.vercel.app/"
          target="_blank"
        >
          My Portfolio
        </a>
        <a href="https://developer.spotify.com" target="_blank">
          Spotify API
        </a>
      </div>
    </footer>
  );
}
