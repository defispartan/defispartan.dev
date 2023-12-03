import React from "react";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const ButtonRow = () => {
  const router = useRouter();
  const handleClick = (url: string) => {
    router.prefetch(url);
    window.open(url, "_blank");
  };

  return (
    <div className={styles.iconRow}>
      <button
        onClick={() => handleClick("https://github.com/defispartan")}
        className={`${styles.iconButton} ${styles.github}`}
      >
        <Image
          src="/github.svg"
          alt="GitHub"
          width={32}
          height={32}
          className={styles.iconButtonImage}
        />
      </button>

      <button
        onClick={() => handleClick("https://twitter.com/defispartan")}
        className={`${styles.iconButton} ${styles.twitter}`}
      >
        <Image
          src="/x.png"
          alt="Twitter"
          width={32}
          height={32}
          className={styles.iconButtonImage}
        />
      </button>

      <button
        onClick={() => handleClick("https://lenster.xyz/u/defispartan")}
        className={`${styles.iconButton} ${styles.lens}`}
      >
        <Image
          src="/lens.svg"
          alt="Lens"
          width={32}
          height={32}
          className={styles.iconButtonImage}
        />
      </button>

      <button
        onClick={() => handleClick("https://www.youtube.com/@defispartan")}
        className={`${styles.iconButton} ${styles.youtube}`}
      >
        <Image
          src="/youtube.svg"
          alt="YouTube"
          width={32}
          height={32}
          className={styles.iconButtonImage}
        />
      </button>

      <button
        onClick={() => handleClick("mailto:defispartan@gmail.com")}
        className={`${styles.iconButton} ${styles.email}`}
      >
        <Image
          src="/email.svg"
          alt="Email"
          width={32}
          height={32}
          className={styles.iconButtonImage}
        />
      </button>
    </div>
  );
};

export default ButtonRow;
