import styles from "./googleAuth.module.css"

const GoogleAuth = () => {
    return (
        <div className={styles.googleAuth}>
            <p>Or register by:</p>
            <div className={styles.googleAuthBtn}>
                <img src="./google.svg" alt="Google" />
                <p>Google</p>
            </div>
        </div>
    )
}

export default GoogleAuth