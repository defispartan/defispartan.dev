import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import Link from 'next/link'

export default function Home() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Write text
  useEffect(() => {
    const text = 'defispartan.dev';
    const delay = 10;
    const interval = setInterval(() => {
      if (index >= delay && index < text.length + delay)
        setText(prevText => prevText + text[index - delay]);
      setIndex(prevIndex => prevIndex + 1);
    }, 50);
    return () => clearInterval(interval);
  }, [index]);

  // Blink cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(cursorVisible => !cursorVisible);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>defispartan.dev</title>
        <meta name="description" content="Homepage of DeFiSpartan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.background}>
          <div className={styles.content}>
            <div>
              <div id="text" className={styles.hometext}>
                {text}
                <span style={{ visibility: cursorVisible ? 'visible' : 'hidden', marginLeft: '-7px' }}>
                  |
                </span>
              </div>
            </div>
            <div className={styles.buttons}>
              <Link href="/home">
                <button className={styles.button}>
                  Enter
                </button>
              </Link>
              <Link href="/about">
                <button className={styles.button} >
                  About
                </button>
              </Link>
              <Link href="/contact">
                <button className={styles.button} >
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
