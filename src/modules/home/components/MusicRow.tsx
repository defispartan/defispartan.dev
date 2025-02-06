import React from "react";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";

const MusicRow = () => {
  return (
    <>
    <div className={styles.rowText}>
        Music
    </div>
    <div className={styles.iconRowSolo}>
      <a
        href="https://youtube.com/@defispartan-media"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.iconButton} ${styles.iconButtonSmall}`}
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
        href="https://open.spotify.com/artist/1iFXLfapskm1v59LAzhidq"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.iconButton}`}
      >
        <Image
          src="/spotify.png"
          alt="Spotify"
          width={32}
          height={32}
          className={`${styles.iconButtonImage} ${styles.spotify}`}
          />
      </a>
    </div>
          </>
  );
};

export default MusicRow;
