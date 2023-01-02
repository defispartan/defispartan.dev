import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function About() {

    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Contact DeFiSpartan" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className={styles.background}>
                    <div className={styles.content}>
                        <Link href="/">
                            <div className={styles.back} >
                                Back
                            </div>
                        </Link>
                        <div className={styles.hometext} style={{ paddingBottom: '15px' }}>
                            Contact
                        </div>
                        <div id="text" className={styles.text}>
                            Telegram: <a className={styles.link} href="https://t.me/defispartan" target="_blank" rel="noreferrer">@defispartan</a>
                        </div>
                        <div className={styles.text}>
                            Email: <a className={styles.link} href="mailto:defispartan@gmail.com" target="_blank" rel="noreferrer">defispartan@gmail.com</a>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}
