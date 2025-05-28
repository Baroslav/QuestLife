import styles from './character.module.css'

const Character = () => {
    return (
        <div className={styles.loginPanel}>
            <div className={styles.imgWrapper}>
                <img src="./helmet.png" alt="" />
            </div>
            <div className={styles.login}>
                <p>Login</p>
                <p>Register</p>
            </div>
        </div>
    )
}

export default Character