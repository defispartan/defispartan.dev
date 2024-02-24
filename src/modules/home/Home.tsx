import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import TextWriter from "./components/TextWriter";
import ButtonRow from "./components/ButtonRow";
import Gallery from "./components/Gallery";

const Home = () => {
  const placeholderSvg =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIGZpbGw9IiMxMjEyMTIiPjwvc3ZnPg==";

  return (
    <div className={styles.cover}>
      <div className={styles.background} />
      <Image
        src="/bg.webp"
        fill
        style={{ objectFit: "cover" }}
        alt="Background"
        priority
        placeholder="blur"
        blurDataURL={placeholderSvg}
      />

      <div className={styles.rightpanel}>
        <TextWriter />
        <ButtonRow />
        {/*       <Gallery /> */}
      </div>

      {/* 
<div style={{ position: 'absolute', left: '0.5rem', bottom: '0.33rem', width: '27%' }}>
  <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/0CTNQFMwe9dpOOGk1J7I0P?utm_source=generator&theme=0" width="50%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div> */}
    </div>
  );
};

export default Home;
