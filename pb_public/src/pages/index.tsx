
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react';

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
            <a href="/home">
              <button className={styles.button}>
                Enter
              </button>
            </a>
            <a href="/about">
              <button className={styles.button} >
                About
              </button>
            </a>
            <a href="/contact">
              <button className={styles.button} >
                Contact
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>

  )
}
