import styles from "./defBtn.module.css"


type DefBtnProps = {
    content : string
}


const DefBtn:React.FC<DefBtnProps> = ({content}) => {
    return (
        <button className={styles.defBtn}>{content}</button>
    )
}

export default DefBtn