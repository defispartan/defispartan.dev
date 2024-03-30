import React from "react";
import styles from "../../styles/Home.module.css";
import TextWriter from "./components/TextWriter";
import ButtonRow from "./components/ButtonRow";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.rightpanel}>
      <TextWriter />
      <Link href="/posts" className={styles.blogLink}>
        <div>Blog</div>
      </Link>
      <ButtonRow />
    </div>
  );
};

export default Home;
