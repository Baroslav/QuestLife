import React from "react"
import styles from "./achivementList.module.css"


type AchiveItemProp = {
    achiveName : string,
    achiveImg : string,
    achievementDifficult : "Legendary" |  "Mythical" | "Epic" | "Unique" | "Default",
}

const aciveVariant:Record<AchiveItemProp["achievementDifficult"] , {achiveType : string}> = {
    Legendary : {achiveType : styles.legendary},
    Mythical : {achiveType : styles.mythicaly},
    Epic : {achiveType : styles.epic},
    Unique : {achiveType : styles.unique},
    Default : {achiveType : styles.default},
}


const AchivementItem:React.FC<AchiveItemProp>= ({achiveName, achiveImg, achievementDifficult}) => {
    const {achiveType} = aciveVariant[achievementDifficult]

    return (
        <div className = {`${styles.achivemetItem} ${achiveType}`}>
            <img className = {styles.achiveImg} src = {achiveImg} alt="" />
            <p>{achiveName}</p>
        </div>
    )
}

export default AchivementItem