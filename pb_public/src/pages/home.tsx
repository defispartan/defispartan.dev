import styles from '../../styles/Home.module.css'

export default function Home() {

    return (

        <main>
            <div className={styles.background}>
                <div className={styles.content}>
                    <a href="/">
                        <div className={styles.back} >
                            Back
                        </div>
                    </a>
                    <div id="text" className={styles.hometext}>
                        Home
                    </div>
                </div>
            </div>
        </main>

    )
}
