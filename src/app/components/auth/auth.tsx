import AddBtn from "../ui/addBtn/addBtn"
import GoogleAuth from "../ui/googleAuth/googleAuth"
import QuestInput from "../ui/input/questInput"
import styles from "./auth.module.css"


const Auth = () => {
    return (
        <div className={styles.auth}>
            <img className={styles.skeletons } src="./skeletons.svg" alt="" />
            <div className={styles.swords}>
                <img className={styles.leftTopSword} src="authSword.svg" alt="" />
                <img className={styles.rightTopSword} src="authSword.svg" alt="" />
                <img className={styles.leftBot} src="authSword.svg" alt="" />
                <img className={styles.rightBot} src="authSword.svg" alt="" />
            </div>
            <div className={styles.authHeader}>
                <h1>Enrollment in the Adventurers’ Guild</h1>
                <h2>
                    Welcome, brave traveler! Your journey is just beginning, and the greatest adventures lie ahead. But first, you must join our Guild, where every member is a legend, every mission a challenge, and every victory a triumph. 
                    Step into the realm of the heroic—forge your legacy with us!
                </h2>
            </div>
            <div className={styles.authInputs}>
                <QuestInput type="email" paleceHolderText ="email" icon="./email.png" labelText="Beacon of Communicatio (Email)"/>
                <QuestInput type="text" paleceHolderText ="user name" icon="./hero.png" labelText="Name Yourself, Traveler (User name)"/>
                <div className={styles.pass}>
                    <QuestInput type="password" paleceHolderText ="password" icon="./skeleton-key.png" labelText="Secret Password"/>
                    <QuestInput type="password" paleceHolderText ="password" icon="./skeleton-key.png" labelText="Confirm a Secret Password"/>
                </div>
            <GoogleAuth/>

            <button>Start your advanture</button>
            </div>
        </div>
    )
}

export default Auth