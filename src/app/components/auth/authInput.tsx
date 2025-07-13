import DefBtn from "../ui/defBtn/defBtn"
import GoogleAuth from "../ui/googleAuth/googleAuth"
import QuestInput from "../ui/input/questInput"
import styles from "./auth.module.css"

type AuthInputsPorps = {
    userAuth : boolean
}

const AuthInputs:React.FC<AuthInputsPorps> = ({userAuth}) => {
    return (
        <div className={styles.authInputs}>
                {
                    userAuth ?
                    <>
                        <QuestInput type="text" paleceHolderText ="user name" icon="./hero.svg" labelText="Name Yourself, Traveler (User name)"/>
                        <QuestInput type="email" paleceHolderText ="email" icon="./email.png" labelText="Beacon of Communicatio (Email)"/>
                    </>
                    :
                    <QuestInput type="text" paleceHolderText ="user name/email" icon="./hero.svg" labelText="Name Yourself, Traveler (User name or email)"/>   
                }
                <div className={styles.pass}>
                    <QuestInput userAuth={userAuth} type="password" paleceHolderText ="password" icon="./skeleton-key.png" labelText="Secret Password"/>
                    {
                        userAuth ?
                         <QuestInput userAuth={userAuth} type="password" paleceHolderText ="password" icon="./skeleton-key.png" labelText="Confirm a Secret Password"/>
                         :
                         null
                    }
                </div>
            <GoogleAuth/>

            <DefBtn content = {"Start your advanture"}/>
            </div>
    )
}

export default AuthInputs