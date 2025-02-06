import React from "react";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";
const SocialRow = () => {
  return (
    <>
    <div className={styles.rowText}>
        Social Media
    </div>
    <div className={styles.socialWrapper}>
      <div className={styles.iconRowLower}>
        <a
            href="https://twitter.com/defispartan"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconButton}`}
            >
            <Image
              src="/x.png"
              alt="Twitter"
              width={32}
              height={32}
              className={`${styles.iconButtonImage}  ${styles.twitter}`}
              />
          </a>

          <a
            href="https://hey.xyz/u/defispartan"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconButton}`}
            >
            <Image
              src="/lens.png"
              alt="Lens"
              width={32}
              height={32}
              className={`${styles.iconButtonImage} ${styles.lens}`}
              />
          </a>

          <a
            href="https://www.youtube.com/@defispartan"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconButton}`}
            >
            <Image
              src="/youtube.webp"
              alt="YouTube"
              width={32}
              height={32}
              className={`${styles.iconButtonImage} ${styles.youtube}`}
              />
          </a>

          <a
            href="https://www.linkedin.com/in/defispartan"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconButton}`}
            >
            <Image
              src="/linkedin.webp"
              alt="LinkedIn"
              width={32}
              height={32}
              className={`${styles.iconButtonImage} ${styles.linkedin}`}
              />
          </a>
      </div>
      <div className={styles.iconRow}>
        <a
            href="https://tiktok.com/@defispartan.dev"
            className={`${styles.iconButton}`}
            >
            <Image
              src="/tiktok.png"
              alt="TikTok"
              width={32}
              height={32}
              className={`${styles.iconButtonImage}  ${styles.tiktok}`}
            />
          </a>
        <a
          href="https://www.facebook.com/andrew.schmidt.7355"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.iconButton}`}
        >
          <Image
            src="/facebook.png"
            alt="Facebook"
            width={32}
            height={32}
            className={`${styles.iconButtonImage} ${styles.facebook}`}
            />
        </a>
        <a
          href="https://www.instagram.com/defispartan"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.iconButton}`}
          >
          <Image
            src="/instagram.png"
            alt="Instagram"
            width={32}
            height={32}
            className={`${styles.iconButtonImage}  ${styles.instagram}`}
            />
        </a>
        <a
          href="https://www.reddit.com/u/defispartan"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.iconButton}`}
          >
          <Image
            src="/reddit.webp"
            alt="Reddit"
            width={32}
            height={32}
            className={`${styles.iconButtonImage} ${styles.reddit}`}
          />
        </a>

        <a
          href="https://twitch.tv/defispartan"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.iconButton}`}
          >
          <Image
            src="/twitch.png"
            alt="Twitch"
            width={32}
            height={32}
            className={`${styles.iconButtonImage} ${styles.twitch}`}
            />
        </a>
      </div>
     
    </div>
    </>
  );
};

export default SocialRow;
