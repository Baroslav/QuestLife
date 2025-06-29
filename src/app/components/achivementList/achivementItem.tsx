import styles from "./achivementList.module.css"

const AchivementItem = () => {
    return (
        <div className = {styles.achivemetItem}>
            <img className = {styles.leftTop} src="./achiveSword.svg" alt="" />
            <img className = {styles.achiveImg} src="./quest.png" alt="" />
            <p>Achievement name</p>
        </div>
    )
}

export default AchivementItem