import styles from '../../styles/Home.module.css'

export default function About() {

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
                        About
                    </div>
                </div>

            </div>
        </main>
    )
}
