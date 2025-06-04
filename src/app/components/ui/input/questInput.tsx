import styles from "./questInput.module.css"

type InputProps = {
    type : "password" | "email" | "text",
    paleceHolderText : string,
    icon?: string,
    labelText? : string
}

const QuestInput:React.FC<InputProps>  = ({type , paleceHolderText, icon , labelText}) => {
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
                    <input className = {styles.questInput} type = {type} placeholder = {paleceHolderText}/>
                </div>
           </>
    )
}

export default QuestInput