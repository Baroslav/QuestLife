import styles from './achievementWindw.module.css'

const AchievementBG = () => {
    return (
        <>
            <img className = {styles.achieveMain} src="mythical.svg" alt="" />
            <img className = {`${styles.achiveSwords} ${styles.leftTop}`} src="swordAchive.svg" alt="" />
            <img className = {`${styles.achiveSwords} ${styles.rightTop}`} src="swordAchive.svg" alt="" />
            <img className = {`${styles.achiveSwords} ${styles.leftBot}`} src="swordAchive.svg" alt="" />
            <img className = {`${styles.achiveSwords} ${styles.rightBot}`} src="swordAchive.svg" alt="" />
        </>
    )
}


export default AchievementBG