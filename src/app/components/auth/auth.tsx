import AddBtn from "../ui/addBtn/addBtn"
import GoogleAuth from "../ui/googleAuth/googleAuth"
import QuestInput from "../ui/input/questInput"
import styles from "./auth.module.css"
import AuthBG from "./authBg"
import AuthContent from "./authContent"
import AuthInputs from "./authInput"

const userAuth:boolean = true

const Auth = () => {
    return (
        <div className={styles.auth}>
            <AuthBG/>
            <AuthContent userAuth = {userAuth}/>
            <AuthInputs userAuth = {userAuth}/>
        </div>
    )
}

export default Auth