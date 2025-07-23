"use client"

import AchivemetList from "./achivementList/achivementlist"
import ToolsBarList from "../../toolsBar/toolsBarList"
import WhiteLine from "../../ui/whiteLine/whiteLine"
import styles from "././achievements.module.css"
import AchievementWindow from "./achievementWindow/achievementWindow"
import { useState } from "react"

const AchivementPage = () => {
    const [achieveWindowOpen, setchieveWindowOpen ] = useState<boolean>(false)
    
    const openWindow = ( ) => {
        setchieveWindowOpen(true)
        console.log(achieveWindowOpen, )
    }
    const closeWindow = () => {
        setchieveWindowOpen(false)
        console.log(achieveWindowOpen , "close")
    }

    return (
        <section className = {styles.quests}>
            <h1>Achievement</h1>
            <WhiteLine/>
            <ToolsBarList btnText="Add achievement" btnIcon="./swords.png" addFunc = {openWindow}/>
            <AchivemetList/>
            {
                achieveWindowOpen && <AchievementWindow close = {closeWindow}/>
            }
        </section>
    )
}

export default  AchivementPage