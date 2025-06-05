import styles from "./questInput.module.css"

type InputProps = {
    type : "password" | "email" | "text",
    paleceHolderText : string,
    icon?: string,
    labelText? : string,
    userAuth? : boolean,
}


const QuestInput:React.FC<InputProps>  = ({type , paleceHolderText, icon , labelText, userAuth = false}) => {
    console.log(userAuth)
    return (
           <>
                {
                    labelText &&
                    <label className={styles.inputLabel}>{labelText}</label>
                }
                <div className = {styles.inputGroup}>
                    
                    {
                        icon &&
                        <img src={icon} alt="inputIcon" />
                    }
                    <div className={styles.inputWrapper}>
                        <input className = {styles.questInput} type = {type} placeholder = {paleceHolderText}/>
                        {
                        userAuth ?  <span className={styles.passDiff}></span> : null 
                        }
                    </div>
                </div>
           </>
    )
    console.log(userAuth)
}

export default QuestInput