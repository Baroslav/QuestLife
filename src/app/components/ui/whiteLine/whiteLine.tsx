import styles from "./whiteLine.module.css"

const WhiteLine = () => {
    return (
        <div className = {styles.lineWrapper}>
            <span className = {styles.whiteLine}></span>
        </div>
    )
}

export default WhiteLine