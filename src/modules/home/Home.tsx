
import React from 'react';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import TextWriter from './components/TextWriter';
import ButtonRow from './components/ButtonRow';

const Home = () => {

    return (
        <div className={styles.cover}>
            <div className={styles.background} />
            <Image src="/bg.webp" fill style={{ objectFit: 'cover' }} alt="Background" priority />

            <div
                className={styles.rightpanel}
            >
                <TextWriter />
                <ButtonRow />
            </div>

            {/* 
<div style={{ position: 'absolute', left: '0.5rem', bottom: '0.33rem', width: '27%' }}>
  <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/0CTNQFMwe9dpOOGk1J7I0P?utm_source=generator&theme=0" width="50%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div> */}
        </div>
    );
};

export default Home;

