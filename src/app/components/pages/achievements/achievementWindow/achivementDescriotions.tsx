import styles from "./achievementWindw.module.css"

const AchievementDescriptipns = () => {
    return (
        <div className = {styles.achieveInputs}>
            <div className = {styles.achiveName}>
                <input type="text" placeholder="Achievemet name"/>
            </div>
            <div className = {styles.achiveInfo}>
                <input type="text" placeholder="Achivemet description"/>
            </div>
        </div>
    )
}

export default AchievementDescriptipns