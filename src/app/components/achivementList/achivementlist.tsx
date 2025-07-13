import AchivementItem from "./achivementItem"
import styles from "./achivementList.module.css"

type AchievementListArr = {
    achivementName : string,
    achivementImg : string,
    achievementDifficult : "Legendary" |  "Mythical" | "Epic" | "Unique" | "Default"
}

const achivementList: AchievementListArr[]  = [
    {
        achivementName : "black kiler",
        achivementImg : "./hero.svg",
        achievementDifficult : "Legendary"
    },
    {
        achivementName : "black kiler",
        achivementImg : "./hero.svg",
        achievementDifficult : "Mythical"
    },
    {
        achivementName : "black kiler",
        achivementImg : "./hero.svg",
        achievementDifficult : "Epic"
    },
    {
        achivementName : "black kiler",
        achivementImg : "./hero.svg",
        achievementDifficult : "Unique"
    },
    {
        achivementName : "black kiler",
        achivementImg : "./hero.svg",
        achievementDifficult : "Default"
    },
    {
        achivementName : "black kiler",
        achivementImg : "./hero.svg",
        achievementDifficult : "Legendary"
    }
]

const AchivemetList = () => {
    return (
        <div className = {styles.achivementList}>
            <div className={styles.itemList}>
                {
                achivementList.map((item)=> (
                    <AchivementItem achiveName ={item.achivementName} achiveImg = {item.achivementImg} achievementDifficult = {item.achievementDifficult}/>
                ))
            }
            </div>
        </div>
    )
}

export default AchivemetList