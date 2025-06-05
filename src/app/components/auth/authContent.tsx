import React from "react"
import styles from "./auth.module.css"

type AuthContetnProps = {
    userAuth: boolean
}

const AuthContent:React.FC<AuthContetnProps> = ({userAuth}) => {
    return (
        <div className={styles.authHeader}>
                <h1>{userAuth ? "Enrollment in the Adventurers’ Guild" : "Welcome back, traveler!"}</h1>
                {
                    userAuth ?
                    <h2>
                        Welcome, brave traveler! Your journey is just beginning, and the greatest adventures lie ahead. But first, you must join our Guild, where every member is a legend, every mission a challenge, and every victory a triumph. 
                        Step into the realm of the heroic—forge your legacy with us!
                    </h2>
                    :
                    <div className={styles.welcomeBack}>
                        <h2 className={styles.mainText}>The road has been long, but your journey continues.</h2>
                        <h2 >Enter your credentials and reclaim your path to glory.</h2>
                    </div>
                }
            </div>
    )
}

export default AuthContent