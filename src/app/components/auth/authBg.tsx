import styles from "./auth.module.css"

const AuthBG = () => {
    return (
        <>
            <img className={styles.skeletons } src="./skeletons.svg" alt="" />
            <div className={styles.swords}>
                <img className={styles.leftTopSword} src="authSword.svg" alt="" />
                <img className={styles.rightTopSword} src="authSword.svg" alt="" />
                <img className={styles.leftBot} src="authSword.svg" alt="" />
                <img className={styles.rightBot} src="authSword.svg" alt="" />
            </div>
        </>
    )
}

export default AuthBG