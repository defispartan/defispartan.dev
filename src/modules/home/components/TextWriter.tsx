import { useEffect, useState } from 'react';
import React from 'react';
import styles from '../../../styles/Home.module.css'

const TextWriter = () => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [cursorVisible, setCursorVisible] = useState(true);
    const textToWrite = 'defispartan.dev';
    const delay = 50;

    useEffect(() => {
        let textInterval: number;

        const writeText = () => {
            if (index >= delay && index < textToWrite.length + delay) {
                setText(prevText => prevText + textToWrite[index - delay]);
            }
            setIndex(prevIndex => prevIndex + 1);
            textInterval = requestAnimationFrame(writeText);
        };

        textInterval = requestAnimationFrame(writeText);

        return () => {
            cancelAnimationFrame(textInterval);
        };
    }, [index]);

    useEffect(() => {
        const cursorBlinkInterval = setInterval(() => {
            setCursorVisible(cursorVisible => !cursorVisible);
        }, 500);
        return () => clearInterval(cursorBlinkInterval);
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div id="text" className={styles.hometext} style={{ lineHeight: '1' }}>
                {text}
                <span
                    style={{
                        visibility: cursorVisible ? "visible" : "hidden",
                        marginLeft: "-7px",
                    }}
                >
                    |
                </span>
            </div>
        </div>
    );
};

export default TextWriter;