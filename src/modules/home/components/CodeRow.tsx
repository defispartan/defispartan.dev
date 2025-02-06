import React from "react";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";

const CodeRow = () => {
  return (
    <>
      <div className={styles.rowText}>
        Code
      </div>
      <div className={`${styles.iconRowSolo} ${styles.iconRowSoloCode}`}>
      <a
          href="https://github.com/defispartan"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.iconButton} ${styles.iconButtonSmall}`}
          >
          <Image
            src="/github.svg"
            alt="GitHub"
            width={32}
            height={32}
            className={`${styles.iconButtonImage} ${styles.github}`}
            />
        </a>
      </div>
    </>
  );
};

export default CodeRow;
