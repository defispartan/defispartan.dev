import React from "react";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";
const ButtonRow = () => {
  return (
    <div className={styles.iconRow}>
      <a
        href="https://github.com/defispartan"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.iconButton} ${styles.github} ${styles.iconButtonSmall}`}
      >
        <Image
          src="/github.svg"
          alt="GitHub"
          width={32}
          height={32}
          className={styles.iconButtonImage}
        />
      </a>

      <a
        href="https://twitter.com/defispartan"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.iconButton} ${styles.twitter}`}
      >
        <Image
          src="/x.png"
          alt="Twitter"
          width={32}
          height={32}
          className={styles.iconButtonImage}
        />
      </a>

      <a
        href="https://www.youtube.com/@defispartan"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.iconButton} ${styles.youtube}`}
      >
        <Image
          src="/youtube.svg"
          alt="YouTube"
          width={32}
          height={32}
          className={styles.iconButtonImage}
        />
      </a>

      <a
        href="https://lenster.xyz/u/defispartan"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.iconButton} ${styles.lens}`}
      >
        <Image
          src="/lens.svg"
          alt="Lens"
          width={32}
          height={32}
          className={styles.iconButtonImage}
        />
      </a>

      <a
        href="mailto:defispartan@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.iconButton} ${styles.email}`}
      >
        <Image
          src="/email.svg"
          alt="Email"
          width={32}
          height={32}
          className={styles.iconButtonImage}
        />
      </a>

      <a
        href="https://twitch.tv/defispartan"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.iconButton} ${styles.twitch}`}
      >
        <Image
          src="/twitch.webp"
          alt="Email"
          width={32}
          height={32}
          className={styles.iconButtonImage}
        />
      </a>

      <a
        href="https://tiktok.com/@defispartan.dev"
        className={`${styles.iconButton} ${styles.tiktok}`}
      >
        <Image
          src="/tiktok.png"
          alt="TikTok"
          width={32}
          height={32}
          className={styles.iconButtonImage}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/defispartan"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.iconButton} ${styles.linkedin}`}
      >
        <Image
          src="/linkedin.png"
          alt="Email"
          width={32}
          height={32}
          className={styles.iconButtonImage}
        />
      </a>
    </div>
  );
};

export default ButtonRow;
