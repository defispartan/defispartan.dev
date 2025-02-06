import React from "react";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";

const MessageRow = () => {
  return (
    <>
    <div className={styles.rowText}>
        Contact
    </div>
    <div className={styles.iconRowSolo}>
        <a
          href="mailto:defispartan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.iconButton}`}
          >
          <Image
            src="/email.png"
            alt="Email"
            width={32}
            height={32}
            className={`${styles.iconButtonImage} ${styles.email}`}
            />
        </a>
        <a
          href="https://t.me/defispartan"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.iconButton}`}
          >
          <Image
            src="/telegram.png"
            alt="Telegram"
            width={32}
            height={32}
            className={`${styles.iconButtonImage} ${styles.telegram}`}
            />
        </a>
    </div>
    </>
  );
};

export default MessageRow;
