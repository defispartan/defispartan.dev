import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {

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
                        <Link href="/">
                            <div className={styles.back} >
                                Back
                            </div>
                        </Link>
                        <div id="text" className={styles.hometext}>
                            Home
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
